---
demo:
    title: 'Executive Assistant Demo'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

# Executive Assistant Demo

**Scenario:**

You're an Executive Assistant, and your executive just asked for a quick read-out on the latest earnings conference call before their next leadership sync. You'll use Copilot to pull the key points and a deeper analysis out of the full transcript, shape that material into a tight executive summary with talking points, and then schedule a follow-up meeting with a draft agenda ready to go.

## Demo Setup

The sample documents can be found in the MS-4021 GitHub repository [here](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/tree/master/ResourceFiles):

The specific files needed for this demo are:

- [Microsoft_FY24_Second_Quarter_Earnings_Conference_Call_Transcript.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Microsoft_FY24_Second_Quarter_Earnings_Conference_Call_Transcript.docx)

> **NOTE:** Allow up to 10 minutes for these files to sync to your OneDrive after downloading. To avoid delays during the demo, ensure these files are downloaded and available in your OneDrive well in advance. If the files are not available, open the documents and copy the shared file links to use in the demo.

## Demos

### Copilot in Word

We'll start by reviewing the transcript from the most recent earnings call and pulling out the key points for your executive.

1. Open the **Microsoft_FY24_Second_Quarter_Earnings_Conference_Call_Transcript.docx** file in Word (either in your browser or desktop application).

    > **NOTE:** You may want to quickly scroll through the document to show how large it is and how time-consuming it would be to summarize manually.

1. Select the **Copilot icon** in the bottom right hand corner of the document.

    ![Copilot icon in Word.](../Demos/Media/Open-Copilot-in-Word.png)

1. In the Copilot pane, switch to **Chat** mode. We'll use Chat (not Edit) so responses appear in the chat pane with source citations and the underlying transcript stays untouched.

1. Enter the following prompt:

    ```text
    Summarize the key points from the Microsoft FY24 Second Quarter Earnings Conference Call.
    ```

1. Now imagine your executive wants to know what Satya Nadella specifically discussed. Enter the following prompt:

    ```text
    Provide a brief summary of Satya Nadella's remarks during the earnings call.
    ```

    - Each bullet includes a reference. Select one to jump to the exact section in the transcript.

1. To create a detailed report, enter the following prompt:

    ```text
    Analyze the Microsoft FY24 Second Quarter Earnings Conference Call document to provide a comprehensive report that includes:
    - A summary of the key points from each speaker
    - Identification of the top three growth areas and their contributing factors.
    - A detailed breakdown of the financial performance, including revenue, operating income, and earnings per share.
    - Trends in AI adoption and its influence on Microsoft's business strategy.
    - A comparison of this quarter's performance with the same quarter last year, highlighting significant changes.
    - Key strategic initiatives and future outlook as discussed in the call.
    ```

    > **TIP:** This is a complex prompt and Copilot may take a moment to generate the response.

1. Once Copilot completes the analysis, select the **Copy** icon to save the results for the next step.

    ![Copy results.](../Demos/Media/Copilot-in-word-copy-results.png)

### Copilot Chat

The report provided by Word is a great starting point, but now we want to use Copilot Chat to help us create an executive summary.

1. Open a browser and navigate to [M365copilot.com](https://m365copilot.com/).

1. Ensure **Web mode** is selected.

    ![screenshot showing web mode tab.](../Prompts/Media/web-mode.png)

1. Paste the response from Copilot in Word into Copilot Chat with the following prompt:

    ```text
    Based on the following information, provide an executive summary on the following information:

    [paste the Word output here]
    ```

    > **NOTE:** Clean up any extraneous text from the copied content to ensure clarity.

1. Refine the summary into a concise format:

    ```text
    Summarize this executive summary into a more concise format by focusing on the most critical insights and metrics for each speaker. Use a structured format with headings and bullet points to improve readability.
    ```

1. Once you're happy with the summary, export the response directly to Word. At the bottom of Copilot's response, select the **More options (…)** menu and choose **Export to Word**.

    ![Export to Word option in Copilot Chat response menu.](../Demos/Media/export-to-word.png)

    > **NOTE:** Copilot saves the response as a Word document in your OneDrive. Select **Open Word** to open the Word document in a new browser tab.

1. With the executive summary complete, ask Copilot:

    ```text
    Based on the summarized executive summary, generate 5-7 concise and impactful talking points my manager can use in their next leadership call. Focus on key achievements, growth areas, and strategic priorities.
    ```

### Copilot in Outlook

In this demo, we'll use Copilot in Outlook to set up a meeting with the executive to get them up to speed on everything that happened during the Second Quarter Earnings Conference Call.

1. Open a browser and navigate to [outlook.office.com](https://outlook.office.com/).

1. Select the **Copilot** icon to the right of the ribbon.

1. Use the following prompt to schedule a sync-up:

    ```text
    I need to schedule a 30-minute meeting with [/Pick a colleague] tomorrow afternoon to discuss the Second Quarter Earnings Conference Call. Can you suggest a time that works? If they are unavailable, provide an alternative.
    ```

1. Copilot should suggest a time and date. The prompt displays a calendar item that can be sent or edited. Select **Edit and send**.

1. Switch to **Scheduling Assistant** to show that the time suggested by Copilot works for both of you.

1. Switch back to the event tab and then select **Draft with Copilot** in the event body.

1. In the prompt window, type the following:

    ```text
    I'm meeting with my boss to discuss key updates and strategic initiatives they missed from the Second Quarter Earnings Conference Call. Create an agenda to discuss financial performance, AI and technology integration, strategic acquisitions, productivity updates, and future outlook.
    ```

1. Optionally, before selecting **Keep it**, ask Copilot to **make it longer**, **make it shorter**, or **change the tone**.

## Key Takeaway

In a single demo, you turned a sprawling earnings call into a leadership-ready briefing — using **Copilot in Word** to extract the key points and a deep analysis straight from the transcript, **Copilot Chat** to shape it into a concise executive summary with talking points, and **Copilot in Outlook** to schedule the follow-up sync with a ready-to-send agenda. Prep work that normally takes a full morning compresses into a focused, end-to-end workflow.

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
