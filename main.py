import os

# where to create/edit folders
path = "D:/My Code Base/connect shiksha learnings/Learning web"

# CHANGING FOLDER NAME
# all_folders = os.listdir(path)
# # getting folder names list they include day-(1,2,3...)
# folder_names = []
# for i in range(21, 34):
#     for folder in all_folders:
#         new_name = folder.split("-")
#         # if folder not exits in folder_names than do this
#         if not folder in folder_names:
#             try:
#                 if new_name[1] == "day":
#                     folder_names.append(folder)
#             except IndexError:
#                 pass
#
# # List of want to name that folder
# renamed_folders = []
# for folder in folder_names:
#     renamed_folders.append(folder.replace(f"day-{folder_names.index(folder) + 1}-", ""))

# Changing folders name
# for i in range(len(folder_names)):
#     folder_path = f"{path}/{folder_names[i]}"
#     new_folder_path = f"{path}/{renamed_folders[i]}"
#
#     os.rename(folder_path, new_folder_path)


# CRATING FOLDER AND FILES INSIDE FOLDER
# files content
html_content = """<h1>hellow world"""
css_content = """h1 { color: red; }"""
js_content = """console.log("hello world!")"""


def generate_file(filename, content):
    with open(filename, "w") as f:
        f.write(content)


for i in range(50, 61):
    folder_name = i
    # CRATING FOLDER
    folder_path = f"{path}/{folder_name}"
    os.mkdir(folder_path)

    # CREATING FILES
    # html_file = f"{folder_path}/index.html"
    # css_file = f"{folder_path}/style.css"
    # js_file = f"{folder_path}/script.js"

    # generate_file(html_file, html_content)
    # generate_file(css_file, css_content)
    # generate_file(js_file, js_content)

    # DELETE FILES AND FOLDERS
    # os.rmdir(folder_path)
    # os.remove(html_file)
    # os.remove(css_file)
    # os.remove(js_file)
