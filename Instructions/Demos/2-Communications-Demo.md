---
demo:
    title: 'Communications Demo'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

# Communications Demo

**Scenario:**

You're an Internal Communications Manager. Your organization is rolling out a new internal AI assistant tool, and you need to publish an awareness post to the communications community so they can cascade the news. You'll use Copilot to research the launch space, draft the post, rewrite it to match your established voice, polish it with a fun intro and outro, and finally send it out as a newsletter-style email.

## Demo Setup

The sample document can be found in the MS-4021 GitHub repository [here](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/tree/master/ResourceFiles):

The specific file needed for this demo is:

- [Contoso_Companion_One_Pager.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_Companion_One_Pager.docx)

> **NOTE:** Allow up to 10 minutes for this file to sync to your OneDrive after downloading. To avoid delays during the demo, ensure the file is downloaded and available in your OneDrive well in advance. If the file is not available, open the document and copy the shared file link to use in the demo.

## Demos

### Copilot Chat

We'll start in Copilot Chat (Web mode) to research the launch space and draft a first pass of the awareness post — no internal data required.

1. Open a browser and navigate to [M365copilot.com](https://m365copilot.com/).

1. Ensure **Web mode** is selected.

    ![screenshot showing web mode tab.](../Prompts/Media/web-mode.png)

1. First, research how other organizations announce new internal AI tools so the new post lands in the right tone. Enter the following prompt:

    ```text
    Research how leading organizations announce new internal AI assistant tools to employees. Summarize the tone and sentiment patterns that resonate (e.g., reassuring, empowering, playful), and list 5 themes that consistently appear in successful launch communications.
    ```

1. Now draft the first version of the awareness post, grounded in the one-pager. Enter the following prompt and attach (or `/`-reference) the **Contoso_Companion_One_Pager.docx** file:

    ```text
    Using the attached Contoso Companion one-pager as the source of truth, draft an internal awareness post announcing the launch. The audience is the global Contoso Communications Community (the first-wave audience called out in the one-pager). Include: what Companion is, the top 3 things it helps with, how to get access, and a clear next step. Follow the voice and brand notes from the one-pager. Aim for ~400 words and a confident, optimistic tone.

    [Contoso_Companion_One_Pager.docx]
    ```

    > **NOTE:** Brackets indicate that a document is being referenced. You can attach the file, paste its OneDrive shared link, or reference it by name using `/`.

1. Once you're happy with the draft, export the response directly to Word. At the bottom of Copilot's response, select the **More options (…)** menu and choose **Export to Word**.

    ![Export to Word option in Copilot Chat response menu.](../Demos/Media/export-to-word.png)

    > **NOTE:** Copilot saves the response as a word document in your OneDrive. Select **Open Word** to open the word document in a new browser tab.

### Edit with Copilot in Word

Now we'll move the draft into Word and use **Edit with Copilot** to rewrite it in our established voice and add a fun intro and outro.

1. The Word document exported from Copilot Chat in the previous step should already be open. Rename it to **Contoso_Companion_Awareness_Post.docx**. Then, remove any auto applied sensitivity label if applicable.

1. Select the **Copilot icon** that appears in the bottom right hand corner of the document.

    ![Copilot icon in Word.](../Demos/Media/Open-Copilot-in-Word.png)

1. Ensure **Allow editing** is selected.

    ![Allow Editing selected.](../Demos/Media/allow-editing.png)

1. Enter the following prompt:

    ```text
    Rewrite this awareness post in my established voice: warm and conversational, second-person, short paragraphs, a playful opener, a "What's in it for you" bulleted section, and a clear call-to-action at the end. Keep the core facts and tighten anything that feels corporate or jargon-heavy.
    ```

1. Review the rewrite, then select **Done** when satisfied.

1. Next, enter the following prompt:

    ```text
    Based on the awareness post below, draft a fun and engaging 2–3 sentence intro and a short outro that will get the communications community excited about Contoso Companion. The intro should hook the reader; the outro should reinforce the call-to-action.
    ```

1. Review the new intro and outro and select **Done** when satisfied.

### Edit with Copilot in Outlook

Finally, we'll send the polished post to the communications community as a newsletter-style email.

1. Open Outlook (either in your browser or desktop application).

1. Select **New Email**.

1. Select **Copilot** icon to the right of the ribbon.

1. Ensure **Edit with Copilot** is enabled.

    ![Edit with Copilot toggle in Outlook.](../Demos/Media/edit-with-copilot-outlook.png)

1. Enter the following prompt:

    ```text
    Draft a newsletter-style email to the communications community announcing Contoso Companion. Use the awareness post I just finalized as the source material. Lead with the playful intro, include the "What's in it for you" bullets, and end with the call-to-action and a link placeholder for the access form. Keep it warm and skimmable — under 250 words.
    ```

    > **NOTE:** you can copy the direct link from the open **Contoso_Companion_Awareness_Post.docx** tab, or select **Add work content** and search for the document.

1. Optionally, ask Copilot to **make it shorter**, **make it more formal**, or **add a subject line**.

## Key Takeaway

In a single demo, you went from a blank page to a polished, on-brand awareness post and announcement email — using **Copilot Chat** to research and draft, **Edit with Copilot in Word** to refine the voice, and **Copilot in Outlook** to ship it. No real tenant data required — perfect for showing the end-to-end value of Microsoft 365 Copilot in any demo environment.

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
