from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    # Example content: Text and image data
    content = [
        {"type": "text", "value": "This is the first paragraph of content."},
        {"type": "image", "value": "https://via.placeholder.com/300x200"},
        {"type": "text", "value": "This is the second paragraph of content."},
        {"type": "text", "value": "More text to demonstrate the page system."},
        {"type": "image", "value": "https://via.placeholder.com/400x300"},
    ]
    return render_template("index.html", content=content)

if __name__ == "__main__":
    app.run(debug=True)
