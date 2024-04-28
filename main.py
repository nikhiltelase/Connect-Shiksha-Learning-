import os

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>JAY SHREE RAM</h1>
</body>
</html>"""
css_content = """
body {
    font-family: sans-serif;
}

h1 {
   color: red;
}
"""


def generate_html_file(filename, content):
    with open(filename, "w") as f:
        f.write(content)


def generate_css_file(filename, content):
    with open(filename, "w") as f:
        f.write(content)


# Iterate over the range of directories you want to remove
for i in range(21, 31):
    path = "D:/My Code Base/connect shiksha learnins/learnings/"
    directory = os.path.join(path, f"{i}", "task")
    os.mkdir(directory)
    generate_html_file(f"{directory}/index.html", html_content)
    generate_css_file(f"{directory}/style.css",  css_content)
