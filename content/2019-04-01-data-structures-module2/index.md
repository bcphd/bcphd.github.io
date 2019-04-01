---
title: Data Structures - Module 2 .NET Primer, creating a CLI, command arguments, and files
tags: [datastructures, dotnet]
date: 2019-04-01T18:00:00.000Z
path: blog/datastructures/module2
cover: ./preview.png
excerpt: Learn all that you need to know about data structures and algorithms.
---

## Ninja Console

Download the Ninja app to your USB drive
https://github.com/bcphd/ninja

Unzip it to your USB drive.

Load the sln with VS.Net

We will be creating an app called ninja. I’ll list a couple of possible commands while I introduce you to the terminology used in the package. Whenever a word like Command, Option or Argument is capitalized, that means I’m talking about its specific definition regarding to the CommandLineUtils package.

Let's walk through the code, VS.Net, and few commands

dotnet ninja.dll
dotnet ninja.dll -h
dotnet ninja.dll --help

look at help for hide command
dotnet ninja.dll hide -h

run a hide command
dotnet ninja.dll hide "in the woods"

run a hide commend and also write it to the log file
dotnet ninja.dll hide "in the woods" -o log.txt

look at contents of log file
more log.txt

ninja hide (simple Command)
ninja attack --exclude civilians (simple Command with Option)

Of course, we can start mixing and matching to make really powerful types of commands. But once you’ve got the basics, everything else is easy-peasy.



### Observation

- All programs manipulate data
  - programs process, store, display, gather
  - data can be information, numbers, images, sound
- Each program must decide how to store data
- Choice influences program at every level
  - execution speed
  - memory requirements
  - maintenance (debugging, extending, etc.)

### What is a Data Structure?
In computer science, a data structure is a data organization, management and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations (algorithms) that can be applied to the data. 

### What is an Abstract Data Type?
Abstract Data Type (ADT) -

1. An opportunity for an acronym

2. Mathematical description of an object and the set of operations on the object

### Data Structures : Algorithms

Algorithm
- A high level, language independent description of a step-by-step process for solving a problem

Data Structure
- A set of algorithms which implement an ADT





