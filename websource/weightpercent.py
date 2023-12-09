from chempy import mass_fractions
from sys import argv


def unpack(s):
    i = 0
    a = {}
    while i <= len(s) - 1:
        chat = ""
        heso = 1

        if i+1 <= len(s) - 1 and s[i+1].isnumeric() == False and s[i+1].isupper() == False and s[i+1] != ")":
            chat = s[i] + s[i+1]
            i += 2
        else:
            chat = s[i]
            i += 1

        if i <= len(s) - 1 and s[i].isnumeric():
            if i+1 <= len(s) -1 and s[i+1].isnumeric():
                heso = int(s[i]+s[i+1])
                i += 2
            else:
                heso = int(s[i])
                i += 1
        else:
            heso = 1

        if not chat in a:
            a[chat] = heso
        else:
            a[chat] += heso


    tmp1 = None
    tmp2 = None
    tur = False
    for i in a:
        if tur:
            a[i] = a[i]*plus
        if i == "(":
            tur = True
            for j in a:
                if j == ")":
                    plus = a[j]
                    tmp1 = j
                    tmp2 = i
                    break
    if tmp1 != None:
        del a[tmp1]
        del a[tmp2]

    return a
try:
    print("Made by HN the developer. [github.com/ImNoobb]")
    temp = unpack(argv[-1])
    r = mass_fractions(temp)
    print("|",end=" ")
    for i in temp:
        print(i,":",temp[i],"|",end=" ")
    print("\nFIND")
    for i in r:
        print(i,"take",round(r[i]*100,2),"%")
except:
    print("ER")