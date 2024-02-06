# data-load-tool
dlt is an open-source library that you can add to your Python scripts to load data from various and often messy data sources into well-structured, live datasets.

## Extracting API data with a generator

Premise:

For this example, we created a simple http api that returns json "page by page",  1000 records per page.

It accepts a parameter called `page`, representing the page number.
If we request a larger page number than there is data, we get an empty response.

To get the pages, we write a loop that asks for pages starting from 1 and increasing, until we receive an empty page.

As we do not know ahead of time how many pages have data and if they fit in memory, yielding the data so it can be handled page by page scales better than first collecting all pages in memory and then returning them.
