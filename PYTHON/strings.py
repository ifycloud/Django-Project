# x = "item one: {x} item two: {y}".format(y="Oba", x="ada")
# print(x)

# y = "abcdgh"
# print(y[:2])
# print(y[2:])

# mylist = ['a','b','c']
# # mylist.append(['1','2','3'])
# print(mylist)
# mylist.extend(['4','5','6'])
# print(mylist)
# mylist.reverse()
# print(mylist)

# mylistB = [1,2,['x','y','z']]
# print(mylistB[2][1])

# matrix = [[1,2,3],[4,5,6],[7,8,9]]

# # LIST COMPREHENSION
# first_col = [row[1] for row in matrix]

# print(first_col)

# # DICTIONARIES

# my_stuff = {"key1": "value", 'key2': 'value2', 'key3': {'123':[1,2,'grabMe']}}
# print(my_stuff['key3']['123'][2].upper())


# foods = {'breakfast': 'tea', 'lunch': 'rice'}
# print(foods['lunch'])
# foods['dinner'] = 'garri'
# print(foods)

# Tuples

# t = (1,2,3)
# print(t[2])


# # SETS

# x = set()

# x.add(2)
# x.add(0.1)
# x.add(3)
# x.add(4)

# print(x)

H = [1,2,3,4]

out = []
for num in H:
    out.append(num**2)

print(out)