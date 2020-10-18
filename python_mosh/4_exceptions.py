from timeit import timeit
# Exceptions

# ValueError
try:
    age = int(input("Age: "))
except ValueError as ex:  # ex is the exception object
    print(" You didn't enter a valid age.")
    print(ex)  # Prints exceptions details
else:
    print("No exceptions were thrown")

# ZeroDivisionError
try:
    age = int(input("Age: "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError):
    print(" You didn't enter a valid age.")
else:
    print("No exceptions were thrown")

# Cleaning up
try:
    file = open("3_data_structures_py")
    age = int(input("Age: "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError):
    print(" You didn't enter a valid age.")
else:
    print("No exceptions were thrown")
finally:  # Finally always runs, otherwise file may not be closed
    file.close()

# The with statemen6
try:
    with open("app.py") as file:  # automatically calls exit statement
        # can write 'with open("x.x") as x, open("y.y") as y
        print("File opened.")
    #  objects with the __enter__ and __exit__ magic methods
    #  supports 'context management protocol'
    #  can use them with the with statement
    age = int(input("Age: "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError):
    print(" You didn't enter a valid age.")
else:
    print("No exceptions were thrown")

# Raising Exceptions
# Google Python3 built in exceptions


def calculate_xfactor(age):
    if age <= 0:
        raise ValueError("Age cannot be zero or less")
    return 10 / age


try:
    calculate_xfactor(-1)  # Crashes with our ValueError exception
except ValueError as error:
    print(error)

# Cost of Raising Exceptions
# In my functions, prefer not to raise exceptions
# See timeit import at top

code1 = """
def calculate_xfactor(age):
    if age <= 0:
        raise ValueError("Age cannot be zero or less")
    return 10 / age

try:
    calculate_xfactor(-1)  # Crashes with our ValueError exception
except ValueError as error:
    pass
"""

code2 = """
def calculate_xfactor(age):
    if age <= 0:
        return None
    return 10 / age

xfactor = calculate_xfactor(-1)
if xfactor == None:
    pass
"""

print("first code: ", timeit(code1, number=10000))
print("second code: ", timeit(code2, number=10000))
