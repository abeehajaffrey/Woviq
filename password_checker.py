def check_password_strength(password):
    if len(password) < 8:
        return "Weak  (Password must be at least 8 characters)"
    has_digit = any(char.isdigit() for char in password)
    has_upper = any(char.isupper() for char in password)
    has_symbol = any(char in "!@#$%^&*()_+-=[]{}|;:,.<>?" for char in password)

    score = sum([has_digit, has_upper, has_symbol])

    if score == 3:
        return "Strong "
    elif score == 2:
        return "Medium "
    else:
        return "Weak ❌"


# ---- Program yahan se start hota hai ----
user_password = input("Check your password: ")
result = check_password_strength(user_password)
print("Password Strength:", result)
