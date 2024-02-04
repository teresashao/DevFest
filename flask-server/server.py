import tensorflow as tf
from google.cloud import texttospeech

from openai import OpenAI

from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline
from transformers import logging
from flask import Flask, request, jsonify


logging.set_verbosity_error()

app = Flask(__name__)
@app.route('/api/data', methods=['POST'])

@app.route('/send-entry', methods=['POST'])
def receive_entry():
    data = request.get_json()
    print("Received data from frontend:", data)
    
    # Assuming the 'text' field is present in the received JSON data
    text_to_analyze = data.get("text", "")
    
    # Process the data and use it as a parameter for the eval_sentiment_top function
    emotion = eval_sentiment_top(text_to_analyze)
    emotion2 = top_specific_sentiment(text_to_analyze)
    meditation = meditation_prompt(emotion, emotion2)
    return jsonify({"message": "Loading.... "+ meditation, "emotion": emotion})

def eval_sentiment(journal_entry):
    tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
    model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

    #emotion = pipeline('sentiment-analysis', 
    #                   model='arpanghoshal/EmoRoBERTa')
    emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa', top_k= 28) 
    #emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa' , return_all_scores= True) 
    emotion_groupings = {}

    emotion_groupings["anxiety"] = ["embarassment", "fear", "grief", "nervousness", "confusion"]
    emotion_groupings["anger"] = ["disgust", "anger"]
    emotion_groupings["sad"] = ["disgust", "disapproval", "embarassment", "disappointment", "sadness", "remorse", "grief"]
    emotion_groupings["happy"] = ["admiration", "pride", "joy", "amusement", "relief", "approval", "love", "optimism", "gratitude", "desire", "caring"]
    emotion_groupings["neutral"] = ["neutral"]

    emotion_score = {}

    emotion_score["anxiety"] = 0
    emotion_score["anger"] = 0
    emotion_score["sad"] = 0
    emotion_score["happy"] = 0
    emotion_score["neutral"] = 0

    #journal_entry = "I ate a hamburger. It was a bad burger. I then spent more money ona another burger. I feel conflicted, I like eating burgers and I enjoyed the new burger but I hate having to spend extra money. I wish I didn't have to spend extra money. After eating the burger the rest of my day was amazing. I looked at everything with a very positive attitute. I enjoyed a pleasant day after the second burger."
    emotion_labels = emotion(journal_entry)[0]

    for emotion in emotion_labels:
        if (emotion["label"] in emotion_groupings["anxiety"]):
            emotion_score["anxiety"] += emotion["score"]
        elif (emotion["label"] in emotion_groupings["anger"]):
            emotion_score["anger"] += emotion["score"]
        elif (emotion["label"] in emotion_groupings["sad"]):
            emotion_score["sad"] += emotion["score"]
        elif (emotion["label"] in emotion_groupings["happy"]):
            emotion_score["happy"] += emotion["score"]
        elif (emotion["label"] in emotion_groupings["neutral"]):
            emotion_score["neutral"] += emotion["score"]

    # this enhanced for loop populates the emotion_score dict with scores based on the score of each returned emotion from the roberta



    #emotion_list = emotion_labels[0]
    #sorted_emotion = sorted(emotion_list, key=lambda x: x['score'],reverse = True)
    #print(sorted_emotion)
    
    return emotion_score

def eval_sentiment_top(journal_entry):
    temp = eval_sentiment(journal_entry)
    sentiment = max(temp, key=temp.get)
    print("here")
    #insert_data(temp, sentiment)
    #print_database()
    return max(temp, key=temp.get)

def top_specific_sentiment(journal_entry):
    tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
    model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

    emotion = pipeline('sentiment-analysis', 
                        model='arpanghoshal/EmoRoBERTa')

    emotion_labels = emotion(journal_entry)
    return emotion_labels[0]['label']



    

#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
api_key = "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"
client = OpenAI(api_key=api_key)

def meditation_prompt(emotion, emotion2):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": "Imagine that you are giving a guided meditation for someone who is feeling"+ emotion + "and" + emotion2+ " at this moment. Make sure that it is formatted only in what you are saying to the person to guide their meditation without any brackets or pause phrases. The meditation should be around 5 minutes, and each sentence should be 10-15 words. Do not include any brackets or references to seconds or minutes of the meditation. Start by welcoming the listener to a meditation on the specific emotion they are feeling and end with thanking them for taking the time for themselves today"}
        ]
    )
    print(emotion + "and" + emotion2)
    message_content = completion.choices[0].message.content
    print(message_content)
    return (message_content)

@app.route('/synthesize', methods=['POST'])
def synthesize():
    try:
        data = request.get_json()
        text = data.get('text')
        emotion = data.get('emotion')

        request = {
            'input': {'text': text},
            'voice': {'languageCode': 'en-US', 'ssmlGender': 'FEMALE'},
            'audioConfig': {'audioEncoding': 'MP3'},
        }

        response = client.synthesize_speech(request=request)
        audio_content = response.audio_content

        return jsonify({'audioContent': audio_content.decode('utf-8')})

    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route("/member")
def members():
    return jsonify(eval_sentiment_top("wow this is so cool")) # replace the string with the string of the journal entry2


if __name__ == "__main__":
    app.run(debug=True)
