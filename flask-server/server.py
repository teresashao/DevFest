import tensorflow as tf

from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline
from transformers import logging
from flask import Flask, request, jsonify

logging.set_verbosity_error()

app = Flask(__name__)
@app.route('/', methods=['POST'])

def receive_journal():
    data = request.get_json()
    received_string = data.get('data')

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


@app.route("/member")
def members():
    return eval_sentiment("this is a great day") # replace the string with the string of the journal entry2


if __name__ == "__main__":
    app.run(debug=True)
