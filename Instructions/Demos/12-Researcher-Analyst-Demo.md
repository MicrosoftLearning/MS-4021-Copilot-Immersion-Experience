---
demo:
    title: 'Researcher and Analyst Demo'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

# Researcher and Analyst Demo

This demo highlights how to use **Researcher** and **Analyst**, two expert agents built into the Copilot app.  

- **Researcher** helps you tackle multi-step research tasks, combining web data with your company’s files and knowledge.  
- **Analyst** thinks like a skilled data scientist, able to perform advanced data analysis and Python execution—even if you don’t know how to code.  

## Demo Setup

In order to complete these demos, you will need to download the [Researcher and Analyst Demo - Content Pack](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/refs/heads/master/ResourceFiles/Researcher_and_Analyst_Demo_Content_Pack.zip), which contains all the necessary files and resources.  

> **TIP:** Before delivering the demo, you can create a SharePoint site in your demo environment to store all the files for easy access. Alternatively, you can store the files locally and reference them directly in your prompts using **/**.  

To access these agents:  

- Open the **Copilot app** from [m365.cloud.microsoft](https://m365.cloud.microsoft).  
- Select **Researcher** or **Analyst** from the navigation pane.  

> **Note:** You’ll need to point Researcher and Analyst to internal files (SharePoint/OneDrive) for grounded insights.

---

## Talking Points

- **Researcher** acts like a highly paid consultant: it can build structured, well-cited deliverables by blending internal files, competitor intelligence, and web sources.  
- **Analyst** is like having a data scientist on hand: it builds models, runs Python code, and visualizes trends instantly.  
- Both agents explain their reasoning transparently so you can validate results.  
- Together, they accelerate strategic work—marketing plans, customer segmentation, financial projections—so you can move faster with confidence.  

---

## Demo Steps

### Researcher: Build a Marketing Plan

> **IMPORTANT:** Steps 1–4 should be completed at the beginning of the training (as indicated by slide 5) to give Researcher enough time to complete the first prompt.

1. Open **Researcher** from the navigation pane.  

    ![Screenshot showing Researcher selected in M365 Copilot menu.](../Prompts/Media/researcher.png)  

1. Enter the following prompt:

    ```text
    Create a marketing plan for our newest SprintCycle EV charger launch. 
    Emphasize its AI-powered adaptive charging, modular design, and biometric access control. 
    Make sure to include recommendations on the right digital channels and content strategy. 
    Include insights from competitors and our past GTM campaigns.
    ```

1. Attach reference files using `/` (point to SharePoint/OneDrive):  

   - **/SprintCycle Charger Product Launch.docx**  
   - *(Optional)* **/Contoso - PedalPerks GTM Plan.docx**  

1. Select **Submit**.  

Researcher will:  

- Combine insights from both internal files and the web.  
- Structure a marketing plan with recommendations on channels and content strategy.  
- Cite sources so you can validate its work.  

> **Note:** Researcher shows its reasoning path (“chain of thought”), and can call other agents when needed.  

### Analyst: Customer Segmentation & Financial Modeling

**Note:** This demo is not performed for the Executive version of the content, instead move onto the **Copilot studio** Demo.

1. Open **Analyst** from the navigation pane.

    ![Screenshot showing Analyst selected in M365 Copilot menu.](../Prompts/Media/analyst.png)  

1. Enter the following prompt:

    ```text
    Find the right customer segment and demographic to sell our new EV charger, 
    include a graph to show how this will maximize our market opportunity.
    ```

1. Attach the file using **+**:  

   - **BoulderEV ebike Internal Market Forecast.xlsx**  

    ![Screenshot showing attach files in Analyst.](../Prompts/Media/Analyst-Attach-Files.png)  

1. Click **Submit**.  

Analyst will:  

- Analyze the dataset.  
- Identify high-value customer segments.  
- Provide visualizations to back up recommendations.  

### Additional Analyst Scenarios

You can run these additional prompts for variety. Each follows the same pattern: **Prompt → Attach file → Submit → Review results.**

- **Financial Projection**  

    ```text
    Build a 5-year financial projection from this data along with a graph to view revenue growth over time.
    ```  

    File: **BoulderEV ebike Internal Market Forecast.xlsx**  

- **Sales Performance**  

    ```text
    Analyze sales volume across locations to identify our highest and lowest performing stores, 
    along with a visualization of the best-selling products.
    ```  

    File: **BoulderEV ebike Internal Market Forecast.xlsx**  

- **Campaign Performance**  

    ```text
    Analyze and visualize how the marketing campaign performed across each target segment 
    and help me decide where to re-target our next campaign.
    ```  

    File: **BoulderEV ebike Internal Market Forecast.xlsx**  

## Key Takeaway

- **Researcher**: accelerates strategy and planning with high-quality research.  
- **Analyst**: delivers data-driven insights with advanced analysis and visualizations.  

Together, Researcher and Analyst shorten the path from **question to insight**—turning weeks of effort into minutes.  

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
