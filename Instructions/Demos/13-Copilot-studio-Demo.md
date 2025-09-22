---
demo:
    title: 'Build an Agent with Copilot Studio lite'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

---

# Build and Publish an Agent using Copilot studio lite

This demo walks through how to build a virtual assistant using Copilot Studio lite via Copilot Chat and publish it to Microsoft 365 Copilot.

## Demo Setup

In order to complete these demos, you will need to download the following files:

- [**Delivery Drone Press Release.docx**](https://github.com/MicrosoftLearning/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/raw/master/ResourceFiles/Delivery_Drone_Press_Release.docx)
- [**Delivery Drone Troubleshooting.docx**](https://github.com/MicrosoftLearning/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/raw/master/ResourceFiles/Delivery_Drone_Troubleshooting.docx)
- [**Delivery Drone SOP.docx**](https://github.com/MicrosoftLearning/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/raw/master/ResourceFiles/Delivery_Drone_SOP.docx)
- [**Upselling Opportunities.docx**](https://github.com/MicrosoftLearning/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/raw/master/ResourceFiles/Upselling_Opportunities.docx)
- [**Delivery Drone FAQ.docx**](https://github.com/MicrosoftLearning/MS-4008-Microsoft-365-Copilot-Interactive-Experience-for-Executives/raw/master/ResourceFiles/Delivery_Drone_FAQ.docx)

> **TIP:** Before delivering the demo, you can create a SharePoint site in your demo environment to store all the files for easy access. Alternatively, you can store the files locally and reference them directly in your prompts using **/**.

## Talking Points

Copilot Studio lite lets us build custom copilots, tailored to specific projects, departments, or knowledge bases. We can give them a personality, set their boundaries, and feed them specific documents to ensure high-quality, grounded responses.

In this demo, we’ll create a virtual assistant for the ReleCloud drone delivery project. The assistant will know everything we’ve uploaded and will help answer team questions, saving time and improving productivity.

## Demo Steps

### Step 1 – Navigate to Copilot Studio lite

1. Go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat) and select **Create agent** from the navigation pane.

    ![Screenshot showing create an agent link.](../Prompts/Media/create-agent.png)

1. Sign in using your credentials.

### Step 2 – Define Your Agent

1. Add the following description when prompted:

    ```text
    You're a virtual project manager assistant for our drone delivery project. You know everything about the project from the documents we've shared with you, and are happy to help team members get the information they need.
    ```

   ![Screenshot showing Describe feature.](../Prompts/Media/create-agent-through-describe.png)

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

> **IMPORTANT:**  You may not be prompted for all of these options, depending on your environment. If you are not prompted, you can add this information using the **Configure** tab within Copilot Studio lite.

### Step 3 – Configure the Agent

1. Select **Configure** to open the agent editor.
1. Review and optionally update the **Instructions** section:

    ```text
    Your name is Drone Delivery Project Manager Assistant. You serve as a virtual project manager for the ReleCloud drone delivery project, with comprehensive knowledge from shared documents. Be clear and concise, avoiding long answers. If the answer is unknown, refer to the drone delivery project manager.
    ```

1. Scroll down to the **Knowledge** section and select into the **Search by name or enter a URL** text bupple. Select **Files** and add the following documents to the agent’s knowledge base:

    - **Delivery Drone Press Release.docx**
    - **Delivery Drone Troubleshooting.docx**
    - **Delivery Drone SOP.docx**
    - **Upselling Opportunities.docx**
    - **Delivery Drone FAQ.docx**

        ![Screenshot showing Knowledge sources.](../Prompts/Media/knowledge-sources.png)

### Step 4 – Test Your Agent

In the right-hand testing pane, try asking a few of the following questions:

- `Tell me about the ReleCloud Delivery Drone.`
- `How do I fix the drone error code D-101?`
- `What are the upsell opportunities for ReleCloud?`
- `What’s the duration of Phase 1 of the delivery drone project?`

> **IMPORTANT:**   It can take some time for the agent to process the documents and provide accurate answers. If you receive an error message, wait a few minutes and try again.

> **TIP:** You can also test via Microsoft Teams once the agent is live.

### Step 5 – Publish and Share

1. Select **Create** to publish the agent.
1. Select **Change share settings** and choose **Anyone in your organization**.
1. Copy the share link and paste it into a Teams chat for easy access.

Once live, you can interact with the agent in Teams chat or via @mentions.

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
