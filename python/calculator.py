ex = False;

while ex == False:
    def add(x,y):
        return x + y
    def sub(x,y):
        return x - y
    def div(x,y):
        return x / y
    def multiply(x,y):
        return x * y

    print("Select operation.")
    print("1.ADD")
    print("2.SUBTRACT")
    print("3.DIVIDE")
    print("4.MULTIPLY")
    print("5.Prime?")
    print("6.EXIT")

    choice = input("Enter choice (1/2/3/4/5/6):")

    if choice == '6':
        print("EXITING")
        ex = True
        
    elif choice == '5':
        num = int(input("Enter number: "))
        from prime import prime
        print(prime(num))
    
    
    else:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        
        if choice == '1':
            print(num1, " + ", num2, " = ", add(num1,num2))
            
        elif choice == '2':
            print(num1, " - ", num2, " = ", sub(num1,num2))
            
        elif choice == '3':
            print(num1, " / ", num2, " = ", div(num1,num2))
            
        elif choice == '4':
            print(num1, " * ", num2, " = ", multiply(num1,num2))
        
        else:
            print("INVALID INPUT")


