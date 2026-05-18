import json;

print("Commands (commas as split):")
print("1. Add/Modify Entry (Name, Section, Description)")
print("2. Remove Entry (Name)")
print("3. List Entry")
print("4. Quit")
while True:
    dt = {};
    with open("acv.json","r") as fl:
        dt = json.load(fl);
    s = input("cmd: ").split(",");
    s[0] = s[0].strip();
    if (s[0]=='4'):
        break;
    if (s[0] =='1'):
        if (not s[2].strip() in dt["content"]):
            dt["content"][s[2].strip()] = {}
        dt["content"][s[2].strip()][s[1].strip()] = s[3].strip();
    if (s[0] == '2'):
        del dt["content"][s[2].strip()][s[1].strip()]
        if (len(dt["content"][s[2].strip()])==0):
            del dt["content"][s[2].strip()];
    if (s[0] == '3'):
        for sc,va in dt["content"].items():
            print(f"{sc}:")
            for ss,val in va.items():
                print(f"  Name: {ss}, Description: {val}")
    with open("acv.json","w+") as fl:
        json.dump(dt,fl);
