import os
import time


def run_this():
    os.system('git stash')
    time.sleep(1)
    os.system('git pull origin master')


run_this()
