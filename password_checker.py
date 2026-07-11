def check_password_strength(password):
    # Step 1: Basic length check (Gatekeeper Rule - pehle validate karo)
    if len(password) < 8:
        return "Weak ❌ (Password must be at least 8 characters)"
    
    # Step 2: Check different conditions using Pythonic approach
    has_digit = any(char.isdigit() for char in password)
    has_upper = any(char.isupper() for char in password)
    has_symbol = any(char in "!@#$%^&*()_+-=[]{}|;:,.<>?" for char in password)
    
    # Step 3: Count kitni conditions poori hui
    score = sum([has_digit, has_upper, has_symbol])
    
    # Step 4: Result decide karna
    if score == 3:
        return "Strong ✅"
    elif score == 2:
        return "Medium ⚠️"
    else:
        return "Weak ❌"


# ---- Program yahan se start hota hai ----
user_password = input("Check your password: ")
result = check_password_strength(user_password)
print("Password Strength:", result)
