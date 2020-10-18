students_count = 1000
rating = 4.99
is_published = False
course_name = """
Multiple
Lines"""

x: int = 1
y = 1
x, y = 1, 2

first = "Steve"
last = "Powell"
name = f"{first} {last}"

print(name)

matrix = [[0, 1], [2, 3]]
zeros = [0] * 100
numbers = list(range(20))
print(numbers[::-1])

# list unpacking
numbers = [1, 2, 3]
first, second, third = numbers
# same as
first = numbers[0]
second = numbers[1]
third = numbers[2]
# if don't want all
first, *other = numbers
print(numbers)  # 1, [2, 3]

# Unpacking with indexes:
letters = ["a", "b", "c"]

for index, letter in enumerate(letters):
    print(index, letters)

# Adding or removing items
letters = ["a", "b", "c"]

# Add
letters.append("d")
letters.insert(0, "-")

# Remove
letters.pop(0)  # No value for last item
letters.remove("b")  # Only first item
del letters[0:3]  # For a range
letters.clear   # Clears list

# 6 - Finding items
letters = ["a", "b", "c"]

letters.count("d")  # Counts instances

if "d" in letters:  # So no error is thrown
    letters.index("d")  # Gets index of item

# Sorting lists
numbers = [3, 51, 2, 8, 6]
numbers.sort(reverse=True)  # Sorts list - Params: Key and Reverse
sorted(numbers)  # Returns a new sorted list

# Sorting complex lists
items = [("Product1", 10), ("Product2", 9), ("Product3", 12)]  # List of tuples


def sort_item(item):  # Function for passing as key to sorting function.
    return item(1)  # Don't use, see lambda below


items.sort(key=lambda item: item[1])

# Map function
items = [("Product1", 10), ("Product2", 9), ("Product3", 12)]  # List of tuples
mapped_prices = list(map(lambda item: item[1], items))  # Maps tuple[1]
# List converts any iterable to a list

# Filter function
items = [("Product1", 10), ("Product2", 9), ("Product3", 12)]  # List of tuples
filtered = list(filter(lambda item: item[1] >= 10, items))

# List Comprehensions
items = [("Product1", 10), ("Product2", 9), ("Product3", 12)]  # List of tuples
# To map:
mapped_prices = [items[1] for item in items]

# To filter
filtered_prices = [item for item in items if item[1] >= 10]

# Zip functions
list1 = [1, 2, 3]
list2 = [10, 20, 30]
# To acheive: [(1, 10), (2, 20), (3, 30)]
list(zip(list1, list2))
# To acheive: [(a, 1, 10), (b, 2, 20), (c, 3, 30)]
list(zip("abc", list1, list2))  # Any iterable

# Queues

# from collections import deque
queue = []  # actually dequeue([])
queue.append(1)
queue.append(2)
queue.append(3)
queue.popleft()
if not queue:  # Check if queue is empty
    None

# Tuples
# Tuples are immutable
tuple1 = (1, 2)
tuple2 = 1, 2
tuple3 = 1,
tuple4 = (1, 2) + (3, 4)  # (1, 2, 3, 4)
tuple5 = (1, 2) * 3  # (1, 2, 1, 2, 1, 2)
tuple6 = tuple([1, 2])  # Convert list to tuple
tuple7 = tuple("Hello")  # ('H', 'e', 'l', 'l', 'o')
# Access / unpack / search  tuple items just like list

# Swapping variable
x = 10
y = 11

x, y = y, x
#
# Arrays
# Arrays are better for long lists
# from array import array
# Google Python 3 typecode
# numbers = array("i", [1, 2, 3]) i is typecode

# Sets
# Set is a collection with no duplicates
# Sets are unorderered collections - Can search if exists, but not find index
numbers = [1, 1, 2, 3, 4]
first = set(numbers)  # {1, 2, 3, 4}
secondSet = {1, 5}

third = first | second
# Union of both sets - {1, 2, 3, 4, 5}
fourth = first & second
# Intersection of sets - items that are in both sets {1}
fifth = first - second
# Difference of sets - items that are in first, not second {2, 3, 4}
sixth = first ^ second
# Symetric difference - items that are in either set but not both {2, 3, 4, 5}

# Dictionary
point = {"x": 1, "y": 2}
point - dict(x=1, y=2)  # Same as line 152
x = point["x"]  # Access
point["x"] = 10  # Setting
point["z"] = 20  # Adding
if "a" in point:
    print(point["a"])  # Prevents error from not existing

x = point.get("a", 0)  # Same as 157-158, returns value, None, or default value

for key in point:
    print(key, point[key])  # gets key and value - x 1

for x in point.items():
    print(x)  # Gets tuple - ('x', 1)

for key, value in point.items():
    print(x)  # Same as line 162-163 - x 1

# Dictionary comprehensions
values = {x * 2 for x in range(5)}  # {0, 2, 4, 6, 8}
values = {x: x * 2 for x in range(5)}  # {0: 0, 1: 2, 2: 4, 3: 6, 4: 8}

# Generator expressions
# Use for large or infinite data sets
# Size of generator object remains consistent despite values held
# You only access items when you iterate over them
values = (x * 2 for x in range(5))

# Unpacking operator
numbers = [1, 2, 3]
print(*numbers)  # prints 1 2 3 not [1, 2, 3]
# Use to unpack any iterable
print(*"Hello")  # 'H', 'e', 'l', 'l', 'o'
values = [*numbers, "a", *numbers, *"Hello"]  # Unpacks and combines

# Unpacking dictionary
first = {"x": 1}
second = {"x": 10, "y": 2}
combined = {**first, **second, "z": 1}  # {'x': 10, 'y': 2, 'z': 1}

# Exercise - Find the most common character in this string
sentence = "This is a common interview question"




