---
{"dg-publish":true,"permalink":"/Learning Obsidian/Dataview/"}
---


# [Dataview Website](https://blacksmithgu.github.io/obsidian-dataview/)

- [/] Go start making heading datas for all my files

# Metadata
	Ways of adding Metadatas
### Frontmatter
	Things in front of the file enclosed in "---"
Formatted like this:
![Pasted image 20230819152210.png|200](/img/user/Attachments/Pasted%20image%2020230819152210.png)
In this context, 
{ #67f9cb}

- `alias` is a [text](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/#text), because its wrapped in ""
- `last-reviewed` is a [date](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/#date), because it follows the `ISO date format`
- `thoughts` is a [object](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/#object) field, because it uses the YAML Frontmatter object syntax

### Inline Fields
	two field types, BASIC FIELDS and **BOLD FIELDS**
This is a `[Basic Field:: "basic field"]`  
This is a `**Bold Field**:: "Bold Field"`  

### Data Types
Type of field they can be is displayed [[Learning Obsidian/Dataview#^67f9cb\|here]]. 
#### Implicit Metadata
Find it [here](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)
>Actually quite useful  


# Query
## Query Type

>`TABLE, LIST, TASK, CALENDAR`

Named after what it does  

## *FROM* & *WHERE*
### *FROM*
FROM is a location, for example: `FROM "2 - Work/Personal/Learning Obsidian/Dataview"`
> ****Must** use **full** address**

### *WHERE*
WHERE can be used with conditions. For example: `WHERE #tag` or `WHERE !#tag`
> **Conditions** can be written as boolean expression, using ***and*** and ***or***

## Tags

>`include them in "FROM" statement.`

to exclude certain tag, use: `-#tag` *(this comes useful with FROM, WHERE*
to include certain tag, use: `#tag`

## FLATTEN
Make *one* results *per* *line*, so multiple fields ``(author:: )`` in one file will be listed one line per fields defined.
> Use: `FLATTEN [field]`


## LIST WITHOUT ID
To make ID disappear:
`LIST WITHOUT ID`

# Functions

### Formats for data / Parameter Types{ #4d49ad}

[Official Website](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/)
	**Number**:: 6
	**Boolean**:: true
	**Date**:: 2023-08-22
		Access proportion of the field
		- Date.year
		- Date.month
		- Date.weekyear
		- Date.week
		- Date.weekday
		- Date.day
		- Date.hour
		- Date.minute
		- Date.second
		- Date.millisecond
	**Duration**:: 5min / 16days / 7 hours
	**Link**:: `[[Something|Render Text]]`
		When using links in Frontmatter, **QUOTE** the links
	**List**:: 1, 2, 3 / "yes", "or", "no"
	**Object**:
		`---`
		`obj: 
			`key1: "Val"  
			`key2: 3  
			`key3:  
				`- "List1"  
				`- "List2"  
				`- "List3"  
		`---`


### Time/Date related
date(any)
date(text, [[Learning Obsidian/Dataview#^4d49ad\|format]])
dur(any)
> this will parse a duration 

#### Date Format
>Text that matches the ISO8601 notation will be automatically transformed into a date object. [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) follows the format `YYYY-MM[-DDTHH:mm:ss.nnn+ZZ]`. Everything after the month is optional.

`Example:: 2021-04  Example:: 2021-04-18 Example:: 2021-04-18T04:19:35.000 Example:: 2021-04-18T04:19:35.000+06:30`


### Input Type related
number(string)
	this will pull the first number out of the given string
string(any)
	convert value to string expression


