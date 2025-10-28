import pyautogui
import random
import subprocess 
import time
import pymsgbox
import os
import markovify


# Get raw text as string.
with open('/Users/shirleyyun/Desktop/Website/Welcome to the NHK .txt') as f:
    text = f.read()

# Build the model.
text_model = markovify.Text(text)

# Print five randomly-generated sentences
for i in range(1):
    textMarkov1 = text_model.make_sentence()
    textMarkov2 = text_model.make_sentence()
    textMarkov3 = text_model.make_sentence()
    textMarkov4 = text_model.make_sentence()
    textMarkov5 = text_model.make_sentence()
    textMarkov6 = text_model.make_sentence()


####################### 1 ###########################
##Displaying Pop-up alerts and messages using pyautogui functionalities:
#combined with a fragment of an x-files script....

# Display an alert x2
alert_response = pyautogui.alert(
textMarkov1, ##this is the message displayed
textMarkov2) ##this is the "title of the window
print(alert_response)  # Output: 'OK'

time.sleep(3)

x_coordinate = 500
y_coordinate = 500
pymsgbox.rootWindowPosition = f"+{x_coordinate}+{y_coordinate}"

alert_response = pyautogui.alert(
textMarkov3, ##this is the message displayed
textMarkov4) ##this is the "title of the window
print(alert_response)  # Output: 'OK'

time.sleep(3)

x_coordinate = 600
y_coordinate = 300
pymsgbox.rootWindowPosition = f"+{x_coordinate}+{y_coordinate}"

# Display a confirmation dialog
confirm_response = pyautogui.confirm(textMarkov5)
print(confirm_response)  # Output: 'OK' or 'Cancel'

time.sleep(3)

# # Display a prompt dialog
# prompt_response = pyautogui.prompt("What about the rest of us? What are we supposed to do? Just wait here until help arrives?")
# print(prompt_response)  # Output: user input

# time.sleep(3)

# # Display a password prompt
# password_response = pyautogui.password('We have to take a chance, What is the password?')
# print(password_response)  # Output: user input

# time.sleep(3)




# ####################### 2 ###########################

# ###We can create a new .txt file and open it on a text editor window, then automate text to be written inside it. 
# file_path = 'Fine_You_stay_here-Tell_us_how_it_turns_out.txt'; 

# open(file_path, 'w').close(); 

# ##Then we can open the file with TextEditor app in Mac
# #Mac
# subprocess.run(['open', '-a', 'TextEdit', file_path])
# #windows
# #subprocess.run(['notepad.exe', file_path])

# # Wait a moment to make sure that the text window is active
# time.sleep(2)

# # Content to write
# text_content = '''He pushes past him. The men start to run. Perkins runs with them. Indiscernible yells can be heard.

# MAN: Hurry up!

# (Perkins runs after Dyer.)

# ANOTHER MAN: You're going the wrong way!

# (It is sundown, and now nightfall. Animals screech and howl. Dyer trips over a log and grunts. Perkins jumps over the log and kneels down beside him. Dyer checks his ankle.)'''

# ##alternativley you can copy the contents from a .txt file you already have:
# ##
text_file = '/Users/shirleyyun/Desktop/Website/A LOVE LETTER TO MY COMPUTER.rtf'
# Read the first 100 lines from the text file 
with open(text_file, 'r') as file: lines = [file.readline() for _ in range(100)] 
# Join the lines into a single string 
text_content_file = ''.join(lines)

# Move the TextEdit window to a specific position  
subprocess.run(['osascript', '-e', 'tell application "System Events" to set position of first window of process "TextEdit" to {100, 100}'])

# Move the mouse to the calculated position 
pyautogui.moveTo(150, 150, duration=1)   

pyautogui.click() 

# type out content
# pyautogui.write(text_content, interval=0.05)

#type the text content from an existing .txt file
pyautogui.write(text_content_file, interval=0.05)