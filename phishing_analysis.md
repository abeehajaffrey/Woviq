# Project 3: Phishing Awareness Analysis

## 📌 Project Overview
This project focuses on identifying and analyzing phishing attempts in sample emails and messages. The goal is not to "crack codes" but to build **Threat Identification** skills — recognizing deceptive tactics, malicious intent, and social engineering techniques used by attackers.

This is part of **Project 3** for the DecodeLabs Cybersecurity Internship (Batch 2026).

## 🎯 Goal
Analyze sample emails/messages to identify phishing attempts, list red flags, and explain why each message is unsafe.

---

## 🧪 Sample Phishing Messages Analyzed

### Sample 1: Fake Bank Security Alert
```
From: Bank Security <support@bank-secure-update.com>
Subject: URGENT: Your account will be suspended in 24 hours

Dear Customer,
We detected unusual activity on your account. Click here immediately
to verify your identity or your account will be permanently locked.
[Verify Now]
```

**Red Flags Found:**
- Sender domain (`bank-secure-update.com`) does not match any real bank domain
- Generic greeting ("Dear Customer" instead of the user's actual name)
- Urgency and threat language ("suspended in 24 hours", "permanently locked")
- Suspicious call-to-action button instead of a direct, verifiable link

**Why It's Unsafe:**
This message uses **urgency** and **fear** to pressure the user into clicking without verifying the sender. Real banks do not threaten account suspension over email with generic greetings.

---

### Sample 2: Fake CEO Wire Transfer Request (Business Email Compromise)
```
From: CEO Name <hacker123@gmail.com>
Subject: Urgent Wire Transfer Needed

Hi, I'm in a meeting and need you to process a wire transfer
immediately. Keep this confidential. Reply with your availability.
```

**Red Flags Found:**
- Display name says "CEO Name" but the actual email domain is a personal Gmail account, not the company domain
- Request for secrecy ("Keep this confidential")
- Urgency combined with unavailability ("I'm in a meeting") to avoid verification
- No specifics about the transfer (amount, recipient, reason)

**Why It's Unsafe:**
This is a classic **Business Email Compromise (BEC)** attack. It exploits authority (impersonating a CEO) and urgency to bypass normal financial approval processes.

---

### Sample 3: Fake Package Delivery SMS (Smishing)
```
Your package could not be delivered. Pay $2.99 redelivery fee here:
bit.ly/xyz123 to reschedule.
```

**Red Flags Found:**
- Shortened URL (`bit.ly`) hides the real destination domain
- Small payment request designed to seem harmless
- No specific courier name, tracking number, or personal detail

**Why It's Unsafe:**
This is a **smishing (SMS phishing)** attempt. Shortened links are commonly used to disguise malicious or lookalike domains, and small payment requests are used to lower the victim's guard.

---

## 🚩 General Red Flag Checklist

| # | Red Flag | Description |
|---|----------|--------------|
| 1 | Sender-Domain Mismatch | Display name looks trustworthy, but the actual email domain is different or unrelated |
| 2 | Urgency / Threats | Creates artificial time pressure ("act now or lose access") |
| 3 | Generic Greeting | Uses "Dear Customer/User" instead of your actual name |
| 4 | Suspicious Links | Shortened URLs, misspelled domains, or lookalike domains (e.g. `amaz0n.com`) |
| 5 | Unexpected Attachments | Uncommon file types like `.iso`, `.js`, `.scr` |
| 6 | Requests for Sensitive Info | Asking for passwords, OTPs, or payment details over email/SMS |
| 7 | Poor Grammar/Spelling | Unusual phrasing or spelling mistakes |
| 8 | Too-Good-To-Be-True Offers | Unexpected prizes, refunds, or rewards |
| 9 | Requests for Secrecy | "Do not tell anyone" or "keep this confidential" |
| 10 | MFA Fatigue | Repeated, unprompted authentication requests |
| 11 | Fake Forwarded Chains | Emails with pasted headers or conversations you were never part of |

---

## 🌳 Decision Tree: Phishing Triage

```
                Incoming Suspicious Email
                          |
        Check sender, links, tone, attachments
                          |
        ┌─────────────────┼─────────────────┐
       Safe           Suspicious          Malicious
        |                 |                   |
      Close          Warn User        Block & Escalate
```

**Actionable Outcomes:**
- **Safe** → No red flags found → Close the ticket
- **Suspicious** → Some red flags found but not conclusive → Warn the user, advise caution
- **Malicious** → Clear phishing indicators confirmed → Block the sender/domain and escalate to security team

---

## 🧠 The Golden Rule: Pause, Verify, Report

1. **Pause** – Recognize the cognitive trigger (urgency, fear, authority) and stop interacting with the message.
2. **Verify** – Confirm the request through a separate, trusted channel (e.g. call a known number, not one provided in the message).
3. **Report** – Use the official reporting channel so the security team can remove the threat from other inboxes too. Don't just delete it.

---

## 🧩 Key Skills Practiced
- Threat analysis and pattern recognition
- Email header and domain inspection
- Social engineering awareness (authority, urgency, curiosity, fear/greed)
- Security decision-making (triage logic)

## 🚀 Possible Improvements
- Build an automated header-parsing tool to flag sender-domain mismatches
- Analyze how URL shorteners are used to hide malicious domains
- Create a company-wide "Red Flag Checklist" poster/resource for employee training

---
**Author:** Abeeha Fatima
**Internship:** DecodeLabs Cybersecurity Internship - Batch 2026
