# Classes
# Creating classes

class Point:
    def draw(self):
        print("draw")


point = Point()
point.draw()
print(isinstance(point, Point))  # isInstance True

# Constructors


class Point:
    def __init__(self, x, y):  # Magic Method
        self.x = x  # instance attribute
        self.y = y  # instance attribute

    def draw(self):
        print(f"Point ({self.x}, {self.y}")


point = Point(1, 2)
point.draw()
point.z = 10  # instance attribute

# Class vs Instance Attributes


class Point:
    default_color = "red"  # Class attribute

    def __init__(self, x, y):  # Magic Method
        self.x = x
        self.y = y

    def draw(self):
        print(f"Point ({self.x}, {self.y}")


point = Point(3, 4)
print(point.default_color)  # returning an instance variable
print(Point.default_color)  # returning an class variable

# Class vs Instance Methods


class Point:
    def __init__(self, x, y):  # Magic Method
        self.x = x  # instance attribute
        self.y = y  # instance attribute

    @classmethod  # Decorators extend the behaviour of a method or function
    # By convention, we call the first parameter to a class method as cls,
    # which stands for class. It is a reference to the class itself
    def zero(cls):
        return cls(0, 0)  # Same as calling Point(0, 0)

    def draw(self):
        print(f"Point ({self.x}, {self.y}")


point = Point.zero()

# Magic Methods
# Magic methods are called automatically by Python
# Google Python Magic methods

print(point)  # prints the name of the object and place in memory from __str__


class Point:
    default_color = "red"  # Class attribute

    def __init__(self, x, y):  # Magic Method
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def draw(self):
        print(f"Point ({self.x}, {self.y}")


print(point)  # prints (1, 2)
print(str(point))  # prints (1, 2) - The same
