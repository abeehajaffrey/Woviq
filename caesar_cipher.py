def encrypt(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            result += chr((ord(char) - 65 + shift) % 26 + 65)
        elif char.islower():
            result += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            result += char  # space, number, symbol as-is
    return result


def decrypt(text, shift):
    return encrypt(text, -shift)  # ulta shift = decryption


def main():
    text = input("Enter your message: ")
    shift = int(input("Enter shift key (e.g. 3): "))

    encrypted = encrypt(text, shift)
    decrypted = decrypt(encrypted, shift)

    print("\n--- RESULT ---")
    print(f"Original  : {text}")
    print(f"Encrypted : {encrypted}")
    print(f"Decrypted : {decrypted}")


if __name__ == "__main__":
    main()