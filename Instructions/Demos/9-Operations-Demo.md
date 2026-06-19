---
demo:
    title: 'Operations Demo'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

# Operations Demo

**Scenario:**

You're an Operations Manager at Contoso responsible for vendor procurement and project execution. You'll use Copilot to mine a completed RFP for the criteria that actually matter, draft a new RFP from fresh project guidelines using a Contoso template, and then send it to potential suppliers — all in one sitting.

## Demo Setup

The sample documents can be found in the MS-4021 GitHub repository [here](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/tree/master/ResourceFiles):

The specific files needed for this demo are:

- [Contoso_Completed_RFP.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_Completed_RFP.docx)

- [Project_Guidelines_Contoso.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Project_Guidelines_Contoso.docx)

- [Contoso_RFP_Template.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_RFP_Template.docx)

> **NOTE:** Allow up to 10 minutes for these files to sync to your OneDrive after downloading. To avoid delays during the demo, ensure these files are downloaded and available in your OneDrive well in advance. If the files are not available, open the documents and copy the shared file links to use in the demo.

## Demos

### Copilot in Word

Let's start by asking Copilot in Word some questions about a Request for Proposal (RFP) document.

1. Open Word (either in your browser or desktop application).

1. Open the following document: [Contoso_Completed_RFP.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_Completed_RFP.docx)

1. Select the **Copilot icon** that appears in the bottom right hand corner of the document.

    ![Copilot icon in Word.](../Demos/Media/Open-Copilot-in-Word.png)

1. Switch from **Edit** mode to **Chat** mode in the Copilot pane.

1. In the Chat pane, select or enter the prompt:

   ```text
   Summarize this document
   ```

1. Next, enter the following prompt:

   ```text
   Analyze this document and generate a categorized list of required items needed to create an RFP.
   ```

1. Switch back to **Edit mode**

    ![Allow Editing selected.](../Demos/Media/allow-editing.png)

1. Next, ask Copilot to create an RFP template by entering:

   ```text
   Analyze this document and create an RFP template based on the content.
   ```

    > **NOTE:** This shows that Copilot can build a template from scratch off a completed RFP. To save time in the next section, we'll switch to a polished, pre-built Contoso template instead of copying this output.

### Copilot Chat

Now that we've summarized the RFP document and seen how Copilot can build a template, let's use Copilot Chat to summarize project requirements for a new RFP.

1. Open a browser and navigate to [M365copilot.com](https://m365copilot.com/).

1. Ensure **Web mode** is selected.

    ![screenshot showing web mode tab.](../Prompts/Media/web-mode.png)

1. Enter the following prompt:

   ```text
   Summarize [Project_Guidelines_Contoso.docx] highlighting the key objectives, scope, implementation timeline, budget, compliance needs, and vendor selection criteria in a bulleted list.
   ```

    > **NOTE:** Brackets indicate that a document is being referenced. Use the link:
    > [Project_Guidelines_Contoso.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Project_Guidelines_Contoso.docx)

1. Next, ask Copilot to extract vendor selection criteria:

   ```text
   Extract and summarize the key vendor selection criteria from this document, including weight percentages and evaluation factors.
   ```

1. Then, ask Copilot to create an RFP based on the project guidelines:

   ```text
   Using the project requirements outlined above, draft an RFP using the following template: [Contoso_RFP_Template.docx].
   ```

    > **NOTE:** Brackets indicate that a document is being referenced. Use the link:
    > [Contoso_RFP_Template.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_RFP_Template.docx)

1. **Copy the generated RFP** to your clipboard for use in the next demo.

1. Optionally, export the response directly to Word. At the bottom of Copilot's response, select the **More options (…)** menu and choose **Export to Word**.

    ![Export to Word option in Copilot Chat response menu.](../Demos/Media/export-to-word.png)

### Copilot in Outlook

Lastly, use Copilot in Outlook to draft an email to potential suppliers summarizing the RFP document.

1. Open Outlook (either in your browser or desktop application).

1. Select **New Email**.

1. Select the **Copilot** icon to the right of the ribbon.

1. Ensure **Edit with Copilot** is enabled.

    ![Edit with Copilot toggle in Outlook.](../Demos/Media/edit-with-copilot-outlook.png)

1. Enter the following prompt:

   ```text
   Draft an email to potential suppliers summarizing the RFP below:

   [paste the RFP contents, or type / to reference the Word document you exported in the previous step]
   ```

1. Once the draft is generated, feel free to adjust the tone, length, or level of formality.

## Key Takeaway

In one workflow, you ran the full RFP loop end to end — using **Copilot in Word** to extract requirements and selection criteria from a completed RFP, **Copilot Chat** to convert fresh project guidelines into a polished new RFP against a Contoso template, and **Copilot in Outlook** to send it to suppliers with the right tone. Work that normally spans days of reviewing, drafting, and emailing compresses into a single focused session.

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
