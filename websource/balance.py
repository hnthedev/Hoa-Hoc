from chempy import balance_stoichiometry as solve
import sys

def main(s):
    s = s.replace(" ","")
    react,prod = s.split("=")
    react = react.split("+")
    prod = prod.split("+")
    try:
        answ = ""
        ans1, ans2 = solve(react,prod)
        print("OUTPUT_HERE")
        for i in ans1:
            answ += f"{ans1[i]}{i}" + " + "
        answ = answ[:-2]
        answ += "= "
        for i in ans2:
            answ += f"{ans2[i]}{i}" + " + "
    except:
        print("ER")
	
    print()
    print(answ[:-2])
    
def tach_chat(s,index,a,l):
	i = 0
	while i <= len(s) - 1:
		chat = ""
		heso = 1

		if i+1 <= len(s) - 1 and s[i+1].isnumeric() == False and s[i+1].isupper() == False:
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
			a[chat] = [f"x{index+l}={heso}"]
		else:
			a[chat].append(f"x{index+l}={heso}")
	return a

def gpt(s):
	try:
		cut = s.index("=")
		chat_phan_ung = s[:cut].split("+")
		san_pham = s[cut+1:].split("+")
	except:
		print("ER")
		return
	so_bien = len(chat_phan_ung) + len(san_pham)
	kq = None

	pu = {}
	sp = {}

	for i in range(len(chat_phan_ung)):
		pu = tach_chat(chat_phan_ung[i],i+1,pu,0)
	for i in range(len(san_pham)):
		sp = tach_chat(san_pham[i],i+1,sp,len(chat_phan_ung))

	for i in pu:
		if not i in sp:
			print(f"ERNO{i}")
			return
	# SOLVE ========================================================= #
	a = [[0 for x in range(so_bien)] for x in range(len(pu))]
	b = [0 for x in range(len(pu))]
	c = 0
	for i in pu:
		for j in pu[i]:
			a[c][int(j[1])-1] = int(j[j.index("=")+1:])
		for j in sp[i]:
			a[c][int(j[1])-1] = -int(j[j.index("=")+1:])
		c += 1


	letter = "abcdefghijklmnop"
	for i in a:
		for j in range(len(i)):
			if i[j] > 0:
				print(f"  {i[j]}{letter[j]}",end = "")
			elif i[j] < 0:
				print(f" {i[j]}{letter[j]}",end = "")
			else:
				print("    ",end = "")
		print(" = 0")
	print()
print("Made by HN the developer. [github.com/ImNoobb]")
gpt(sys.argv[-1])
main(sys.argv[-1])
