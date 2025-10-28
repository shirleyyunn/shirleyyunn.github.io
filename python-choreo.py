import subprocess
import time

# Paths to the Python programs
program1 = 'soundPerformance.py'
program2 = 'autoGUI.py'
program3 = 'imagePerformance.py'
# program4 = 'opensound.py'

# Running the programs
if __name__ == "__main__":
	
    # Run program1 1 time, as soon as we run this program
  
    subprocess.Popen(['python', program1])
    # Wait for 3 seconds 
    time.sleep(5)
    
    # Run program2 n times with a delay of x seconds between each time
    for _ in range(1):
        subprocess.Popen(['python', program2])
        time.sleep(5)

    # Run program3 n times and program4 for n times concurrently
    for _ in range(8):
        p1 = subprocess.Popen(['python', program3])
        time.sleep(5)
        # if _ < 3:  # Ensure we only run program4 only for the times we want
        #     p2 = subprocess.Popen(['python', program4])
        # time.sleep(2)
    
    print('Finished running programs.')