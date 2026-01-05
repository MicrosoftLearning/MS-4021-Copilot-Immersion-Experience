---
demo:
    title: 'Demo: Build an Agent with Copilot Studio'
---

[Back to Index](https://microsoftlearning.github.io/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/)

---

# Build and Publish an Agent using Copilot Chat

## Demo Setup

This demo walks through how to build a virtual assistant using Copilot Studio via Copilot Chat and publish it to Microsoft 365 Copilot.

To access agent builder navigate to:

- [Copilot Chat](https://m365.cloud.microsoft/chat)

You'll also need download the following word documents:

- [**Delivery Drone Press Release.docx**](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Delivery_Drone_Press_Release.docx)
- [**Delivery Drone Troubleshooting.docx**](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Delivery_Drone_Troubleshooting.docx)
- [**Delivery Drone SOP.docx**](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Delivery_Drone_SOP.docx)
- [**Upselling Opportunities.docx**](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Upselling_Opportunities.docx)
- [**Delivery Drone FAQ.docx**](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Delivery_Drone_FAQ.docx)

> **NOTE:**  It can take up to 10 minutes for these files to sync to your OneDrive (required to reference file later). To expedite this process, you can open the document once its synced to your OneDrive and then close it, which will add it to your Most Recently Used (MRU) list.

## Talking Points

Copilot Studio lets us build custom copilots, tailored to specific projects, departments, or knowledge bases. We can give them a personality, set their boundaries, and feed them specific documents to ensure high-quality, grounded responses.

In this demo, we’ll create a virtual assistant for the ReleCloud drone delivery project. The assistant will know everything we’ve uploaded and will help answer team questions, saving time and improving productivity.

## Demo Steps

### Step 1 – Navigate to Copilot Chat or Copilot Studio

1. Go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat) and select **Create an agent** in the right-hand rail.  
   OR  
   Go directly to [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and click **Create** in the left-hand rail.

1. Sign in using your credentials.

### Step 2 – Define Your Agent

1. Add the following description when prompted:

    ```text
    You're a virtual project manager assistant for our drone delivery project. You know everything about the project from the documents we've shared with you, and are happy to help team members get the information they need.
    ```

   ![Screenshot showing Describe feature.](../Exec/Media/create-agent-through-describe.png)

1. Name the assistant:

    ```text
    Drone Delivery Assistant
    ```

1. If asked for confirmation:

    ```text
    Yes, thank you
    ```

1. If prompted for what to avoid or emphasize:

    ```text
    Please be clear and concise and avoid long answers. Where possible, refer primarily to the knowledge shared with you. If you don't know the answer, refer them to the drone delivery project manager.
    ```

1. If prompted for tone of voice:

    ```text
    Friendly and professional
    ```

> **IMPORTANT:**  You may not be prompted for all of these options, depending on your environment. If you are not prompted, you can add this information using the **Configure** tab within Copilot Studio.

### Step 3 – Configure the Agent

> **Note:**  If you're using Copilot Studio directly (https://copilotstudio.microsoft.com/), you may need to create the agent first before you can return and configure it.

1. Click **Configure** to open the agent editor.
1. Review and optionally update the **Instructions** section:

    ```text
    Your name is Drone Delivery Project Manager Assistant. You serve as a virtual project manager for the ReleCloud drone delivery project, with comprehensive knowledge from shared documents. Be clear and concise, avoiding long answers. If the answer is unknown, refer to the drone delivery project manager.
    ```

1. Scroll down to the **Knowledge** section and click into the **Search by name or enter a URL** text bupple. Select **Files** and add the following documents to the agent’s knowledge base:

    - **Delivery Drone Press Release.docx**
    - **Delivery Drone Troubleshooting.docx**
    - **Delivery Drone SOP.docx**
    - **Upselling Opportunities.docx**
    - **Delivery Drone FAQ.docx**

        ![Screenshot showing Knowledge sources.](../Exec/Media/knowledge-sources.png)

### Step 4 – Test Your Agent

In the right-hand testing pane, try asking a few of the following questions:

- `Tell me about the ReleCloud Delivery Drone.`
- `How do I fix the drone error code D-101?`
- `What are the upsell opportunities for ReleCloud?`
- `What’s the duration of Phase 1 of the delivery drone project?`

> **IMPORTANT:**   It can take some time for the agent to process the documents and provide accurate answers. If you receive an error message, wait a few minutes and try again.

> **TIP:** You can also test via Microsoft Teams once the agent is live.

### Step 5 – Publish and Share

1. Click **Create** to publish the agent.
1. Select **Change share settings** and choose **Anyone in your organization**.
1. Copy the share link and paste it into a Teams chat for easy access.

Once live, you can interact with the agent in Teams chat or via @mentions.

---

[Back to Index](https://microsoftlearning.github.io/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/)
