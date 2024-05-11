import os

# where to create folders
path = "D:\My Code Base\connect shiksha learnings\Learnings"

# files content
html_content = """<h1>hellow world"""
css_content = """h1 { color: red; }"""
js_content = """console.log("hello world!")"""


def generate_file(filename, content):
    with open(filename, "w") as f:
        f.write(content)


for i in range(35, 41):
    folder_name = i
    # crating folder
    folder_path = f"{path}/{folder_name}/task"
    # os.mkdir(folder_path)

    # creating files
    html_file = f"{folder_path}/index.html"
    css_file = f"{folder_path}/style.css"
    js_file = f"{folder_path}/script.js"

    # generate_file(html_file, html_content)
    generate_file(css_file, css_content)
    generate_file(js_file, js_content)
