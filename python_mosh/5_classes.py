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
        self.x = x
        self.y = y

    def draw(self):
        print(f"Point ({self.x}, {self.y}")


point = Point(1, 2)
point.draw()
