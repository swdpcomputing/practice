# Exercise - Find the most common character in this string
sentence = "This is a common interview question"

sentenceSet = set(sentence.replace(" ", "").lower())
sentenceDict = {c: 0 for c in sentenceSet}
for key, value in sentenceDict.items():
    for c in sentence:
        if c == key:
            sentenceDict[key] += 1

sorted_sentence = sorted(sentenceDict.items(),
                         key=lambda x: x[1], reverse=True)

print(sorted_sentence)
print(sorted_sentence[0])
print("")

# Mosh

# from pprint import pprint

char_frequency = {}
for char in sentence:
    if char in char_frequency:
        char_frequency[char] += 1
    else:
        char_frequency[char] = 1

char_frequency_sorted = sorted(
    char_frequency.items(),
    key=lambda kv: kv[1],
    reverse=True)

print(char_frequency_sorted)
print(char_frequency_sorted[0])
