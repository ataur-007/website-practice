import os
import time
import random

# Define the game variables
car_position = 5
score = 0
game_over = False

# Function to draw the game screen
def draw_game():
    os.system("cls" if os.name == "nt" else "clear")
    road = "|---" * 10 + "|"
    print(road)
    print(" " * car_position + "🚗" + " " * (10 - car_position))
    print(road)
    print("Score: " + str(score))

# Main game loop
while not game_over:
    draw_game()
    
    # Move the car
    move = input("Press A to move left, D to move right, Q to quit: ").lower()
    
    if move == 'a':
        car_position = max(0, car_position - 1)
    elif move == 'd':
        car_position = min(10, car_position + 1)
    elif move == 'q':
        break
    
    # Update the score
    score += 1
    
    # Generate obstacles
    if random.randint(1, 10) == 1:
        game_over = True

# Game over
os.system("cls" if os.name == "nt" else "clear")
print("Game Over!")
print("Your Score: " + str(score))
