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
