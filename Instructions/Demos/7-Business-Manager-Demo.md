---
demo:
    title: 'Business Manager Demo'
---

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)

# Business Manager Demo

**Scenario:**

Analyze sales performance and customer feedback to address a product issue, then collaborate with your team to plan improvements.

## Demo setup

The sample documents can be found in the MS-4021 GitHub repository [here](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/tree/master/ResourceFiles):

The specific files needed for this demo are:

- [EV_Charger_Sales_Analysis_v1.xlsx](https://github.com/MicrosoftLearning/MS-4021-Copilot-Immersion-Experience/raw/master/ResourceFiles/EV_Charger_Sales_Analysis_v1.xlsx)

> **NOTE:** Allow up to 10 minutes for these files to sync to your OneDrive after downloading. To avoid delays during the demo, ensure these files are downloaded and available in your OneDrive well in advance. If the files are not available, open the documents and copy the shared file links to use in the demo.

## Demo Steps

### Copilot in Excel

1. Launch Excel (either in your browser or desktop application) and open the **EV_Charger_Sales_Analysis_v1.xlsx** file.

1. **Navigate to the "Sales by Product"** tab in the Excel file.

1. select **Copilot** from the excel ribbon, then select **App skills** to open the Copilot pane.

1. Use Copilot to Calculate Monthly Revenue:  

   Let's start by figuring out which category of your business is driving the most revenue. This sheet contains three years of sales data, with thousands of rows showing sales by product by month. Although it's a routine task, this volume of data can be unwieldy. You can ask Copilot to quickly calculate the monthly revenue by product.

   Use the following prompt:

   ```text
   Calculate monthly revenue by product and add a column with total revenue - refer to the Prices worksheet.
   ```

    - Copilot knows how to do that and which data to reference across tabs.
    - Copilot creates a plan for how it runs those numbers, executes that plan showing its work as it goes, and prompts you to ask questions or iterate on the solution it reached.
    - Select **+Insert column**, then navigate back to the **Sales by Product** tab.

1. Use Copilot to analyze revenue by entering the following prompt in the Copilot pane:

    ```text
    What is the total revenue for each category so far in 2024?
    ```

    - Copilot runs the numbers and creates a bar chart that you can add to your workbook.
    - Select **+Add to a new sheet**, then navigate back to the **Sales by Product** tab.

1. Now, use Copilot to highlight products with low sales by entering this prompt:

    ```text
    Highlight rows where the value in column H is less than $100K.
    ```

    - Copilot applies conditional formatting, helping you identify products that aren’t performing to your standards.

1. **Navigate to the "Reviews" tab** to analyze customer feedback.

1. Ask Copilot to summarize the top concerns by entering the following prompt:

    ```text
    Summarize the top 3 customer concerns we should focus on.
    ```

    - Copilot analyzes the feedback and surface the top three customer concerns. It looks like charging speed is an emerging issue.

1. Next, highlight reviews mentioning charging speed by entering this prompt:

    ```text
    Highlight reviews that mention issues related to charging speeds.
    ```

    - Copilot highlights all relevant reviews in the dataset.

### Copilot Chat

Now that we’ve identified slow charging speed as a key issue, use **Copilot Chat** to explore the problem further and identify potential solutions.

1. Open a browser and navigate to [M365copilot.com](https://m365copilot.com/).  

1. Ensure **Web Mode** is selected.  

    ![screenshot showing web mode tab.](../Prompts/Media/web-mode.png)

1. To research the issue, enter the following prompt:
  
    ```text
    Research common issues with EV charger speeds and identify potential causes or solutions. Summarize findings in a format suitable for a business presentation. Highlight any relevant industry benchmarks or competitor data.
    ```

   - Review Copilot’s summary and ask for additional context or recent trends, if needed.  

1. Optionally, refine the output:
   - Ask Copilot for recent trends or technologies addressing EV charger efficiency:

    ```text
    What are the latest innovations or technologies addressing slow EV charger speeds in 2024?
    ```

   - Request competitor insights:

    ```text
    Assuming competitors in the EV charging market are improving speed by 20% annually, suggest how we could position our CC-2001 and CC-2000 models to stay competitive.
    ```

1. Ask copilot to come up with five strategic questions to ask the project lead for EV chargers:

    ```text
    Based on this information, suggest 5 strategic questions to ask the product team during our meeting tomorrow. Focus on identifying root causes, assessing risks, and brainstorming potential improvements.
    ```

### Copilot in Outlook

In this demo, we'll use Copilot in Outlook to set up a meeting with the Project lead in charge of the EV charger product line to discuss potential solutions.

1. Open a browser and navigate to [outlook.office.com](https://outlook.office.com.com/).

1. In the Outlook ribbon, select the Copilot Icon to open up the Copilot pane.

1. In the prompt window, type the following:

    ```text
    I need to schedule a meeting with [/Pick a colleague] tomorrow afternoon to discuss the EV charger issue reports. Can you suggest a time that works? If they are unavailable, please suggest an alternative time.
    ```

1. Copilot should suggest a time and date for the meeting. the prompt displays a calendar item that can be sent or edited, select **Edit**.

1. Switch to scheduling assistant to show that the time suggested by Copilot works for the project manager. You should both be free.

1. Switch back to the event tab and then select **Draft with Copilot** in the event body.

1. In the prompt window, type the following:

    ```text
    Create an agenda for a meeting to discuss slow charging speeds with our CC-2001 and CC-2000 models. Include time for an introduction to the issue, a review of any available data or customer feedback, and a brainstorming session for potential solutions.  
    ```

1. Optionally, before selecting **Keep it** you can ask copilot to make it longer, shorter, or change the tone of the drafted agenda.

[Back to Index](https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/)
