---
title: 'IT Demo'
demo:
    title: 'IT Demo'
---

# IT Demo

**Scenario:**

You're an IT Infrastructure Manager at Contoso, and you've just been asked to roll out a new network security product — Contoso CipherGuard — across the corporate network. You'll use Copilot to build a reusable project implementation plan template, draft a CipherGuard-specific version of that plan grounded in the product specification, and turn the finished plan into an executive presentation.

## Demo Setup

The sample documents can be found in the MS-4021 GitHub repository [here](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/tree/master/ResourceFiles):

The specific files needed for this demo are:

- [Contoso_CipherGuard_Product_Specification.docx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/Contoso_CipherGuard_Product_Specification.docx)

> **NOTE:** Allow up to 10 minutes for these files to sync to your OneDrive after downloading. To avoid delays during the demo, ensure these files are downloaded and available in your OneDrive well in advance. If the files are not available, open the documents and copy the shared file links to use in the demo.

## Demos

### Copilot Chat

Let's start by asking Copilot to create a reusable project implementation plan template we can apply to any rollout — starting with our network security product.

1. Open a browser and navigate to [M365copilot.com](https://m365copilot.com/).

1. Ensure **Web mode** is selected.

    ![screenshot showing web mode tab.](../Prompts/Media/web-mode.png)

1. In the prompt window, type the following:

    ```text
    You are an IT infrastructure manager at Contoso. Your task is to create a detailed project implementation plan for installing a new network security product in your corporate network. Your plan should include key milestones, resource allocation, potential risks, and a timeline to ensure successful deployment and minimal disruption to operations.
    ```

    > **NOTE:** Role-based prompts help Copilot understand the user's responsibilities and context, improving the relevance and specificity of the output.

1. Now we'll refine the project plan by asking Copilot to add new sections to the project plan:

    Input the following prompt:

    ```text
    Please add the following sections to the existing plan: testing and QA, training, communication, documentation and reporting, stakeholder analysis, project timeline, and risk assessment and mitigation. Ensure these sections provide detailed action steps and align with the existing content. Avoid duplicating any items already included in the original plan.
    ```

1. Once you're happy with the draft, export the response directly to Word. At the bottom of Copilot's response, select the **More options (…)** menu and choose **Export to Word**.

    ![Export to Word option in Copilot Chat response menu.](../Demos/Media/export-to-word.png)

    > **NOTE:** Copilot saves the response as a Word document in your OneDrive. Select **Open Word** to open the Word document in a new browser tab.

1. In the new Word document tab, rename the file to **Project Implementation Plan.docx**. Then copy the shared URL from the document (enable AutoSave and select your OneDrive account if prompted).

    ![Share link.](../Demos/Media/share-menu-with-copy-link-9fd1c60a.png)

### Copilot in Word

Now we'll use that template alongside the CipherGuard product specification to draft a deployment plan tailored to this rollout.

> **TIP — Optional alternative using the Word agent:** Instead of leaving Copilot Chat to open Word, you can stay in Chat, `@`-mention the **Word** agent, and have it create the new document for you. Use a prompt like:
>
> ```text
> @Word Using the [Contoso_CipherGuard_Product_Specification.docx] for product details and the project plan we just created as a structural template, draft a comprehensive project implementation plan for deploying Contoso CipherGuard. Ensure the plan aligns with the product specifications and follows the structure outlined in the template. Save it as Contoso_Project_Plan.docx.
> ```
>
> When it's done, open the resulting **Contoso_Project_Plan.docx** from your OneDrive and skip ahead to the PowerPoint section. **Heads up:** the Word agent can take several minutes to complete, so the in-app flow below is usually a safer choice during a live demo.

1. Open a new Word document (either in your browser or desktop application).

1. In the **Describe what you'd like to draft with Copilot?** prompt box, type the following:

    ```text
    Using the [Contoso_CipherGuard_Product_Specification.docx] for product details and the [Project Implementation Plan.docx] as a structural template, draft a comprehensive project implementation plan for deploying Contoso CipherGuard. Ensure the plan aligns with the product specifications and follows the structure outlined in the template.
    ```

    > **NOTE:** Brackets indicate that a document is being referenced. Attach the files directly, paste their OneDrive shared links, or reference them by name using `/`. Use these for this demo:
    >
    > - **Contoso_CipherGuard_Product_Specification.docx** — the file you downloaded in Demo Setup.
    > - **Project Implementation Plan.docx** — use the shared link you copied at the end of the previous section.

1. Select **Keep it** when satisfied with the output.

1. Once finished, save the document as **Contoso_Project_Plan.docx** and copy the shared URL (enable AutoSave and select your OneDrive account if prompted).

    ![Share link.](../Demos/Media/share-menu-with-copy-link-9fd1c60a.png)

### Copilot in PowerPoint

Finally, we'll use Copilot to generate a PowerPoint presentation based on the CipherGuard implementation plan.

1. Launch Microsoft PowerPoint from your browser [PowerPoint.new](https://PowerPoint.new) or use the desktop application.

1. Open a new blank presentation.

1. Select the **Copilot icon** in the bottom right hand corner of the presentation.

    ![Copilot icon in PowerPoint.](../Demos/Media/Open-Copilot-in-PowerPoint.png)

1. In the Copilot pane, type the following prompt:

    ```text
    Create a presentation from [Link to Contoso_Project_Plan.docx].
    ```

    > **NOTE:** Paste the shared link for the **Contoso_Project_Plan.docx** document or upload by selecting **Add work content** and then **Upload images and files**.

1. Copilot begins generating slides based on the project plan, providing an outline along with features like speaker notes, images, slide layouts, and a General sensitivity label.

    > **NOTE:** Generating slides may take up to two minutes, depending on the document's complexity and number of slides.

## Key Takeaway

In a single demo, you turned a generic deployment request into a CipherGuard-ready rollout package — using **Copilot Chat** to build a reusable project implementation plan template, **Copilot in Word** to draft a product-specific plan grounded in the CipherGuard specification, and **Copilot in PowerPoint** to generate the executive presentation. Project work that normally takes weeks of templating and back-and-forth compresses into a focused, end-to-end workflow.
