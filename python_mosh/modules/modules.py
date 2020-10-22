# Modules
# Creating Modules

# from ecommerce.sales import calc_shipping, calc_tax
# calc_shipping()
# calc_tax()

# or

# import sales
# sales.calc_shipping()
# sales.calc_tax()

# or

# from ecommerce import sales
# sales.calc_shipping()
# sales.calc_tax()

# -----Importing from subackages
# You need to add subpackage name:
# from ecommerce.shopping import sales

# -----Importing from sibling packages
# from ecommerce.customer import contact - absolute import
# from ..customer import contact

# import sys
# If import not found in current directory, it will look in
# predefined directories that come with Python installation
# print(sys.path) Prints all paths

# print(dir(sales)) - Prints attributes and methods

# -----Executing modules as scripts