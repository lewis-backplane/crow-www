---
sidebar_position: 1
---

# Crowsnest - Technical Overview

Let's discover **Crowsnest in less than 5 minutes**.

## Introduction

Crowsnest is an automated cybersecurity compliance platform that provides organisations with:

- **Visibility** - a single, unified, real-time cyber compliance view of their security posture across the organisation
- **Translation** - through translating high-level security controls from frameworks like NIST, CIS, and ISO 27001 into low-level, automatable checks,
- **Automation** - through continuous evidence collection, automated attestation, and actionable gap analysis.

This not only reduces the time and cost of compliance but also helps organisations evolve their cyber maturity—transforming compliance from a static requirement into a strategic advantage.

## The Problem

Cybersecurity compliance today is manual, fragmented, and slow — costing organisations time, money, and increasing their exposure to risk. The core challenges are:

1.  **Incomplete visibility**.

    Gathering evidence from scattered, unaligned security tools is time-consuming and error-prone, leading to blind spots that increase risk.

2.  **Unactionable frameworks**.

    Security frameworks define what to do, but don’t explain how — leaving teams to manually translate abstract controls into technical, enforceable checks.

3.  **Delayed Compliance insights**.

    Compliance reporting is often outdated by the time it’s done, limiting the ability to steer security strategy in real time and respond quickly to threats or gaps.

## The Solution

- **Crowsnest Console** - provides a unified cyber compliance platform by automating the retrieval and collation of compliance data, and evaluating the data to output in realtime cyber compliance posture assessments.

- **Crownest Assessment Engine** - automates evaluation of high-level security controls into attestable checks to produce pass or fail results quickly.

- **Extractor Crows** - will go and speak to the disparate systems to bring together the data that is required for full compliance evaluation.

### Who is Crowsnest for ?

Crowsnest is for the CTO, CISO and App teams. Compliance is an organisational activity that operates at various levels within the business. Whether the business-level to the technical-level.

Crowsnest brings a cohesive gather of compliance data to be consumed at each level in the organisation.

The assessments can be viewed at 3 organisational levels known as Compliance Lenses:

| Level       | Scope              | Personas                       | Responsibility                                                                                          |
| ----------- | ------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Executive   | Organisation       | CISO or Executive level.       | This is the business strategy audience, Cyber Compliance is a part of managing Risk in an organisation. |
| Managerial  | Business Unit      | Portfolio and Product Owners   | Delegating Accountability to Organisational Groups                                                      |
| Engineering | Workload / Product | Engineers and Developers level | Ensuring the Workload has the necessary Design and Configuration that attests to the Security Controls  |

### How Crowsnest works

#### Components of Crowsnest

Crowsnest is architected as a layered stack to provide separation of concerns with regards to asynchronous processing.

The `Connector` layer will provide a feed of data to the `Assessment` layer that processes and evaluates checks against the data. Finally this is passed to the Core API Server as `Assessments` which is then processed for presentation.

| Tier     | Responsibility/Function | Crowsnest Component | What it does                                                                                                                                                                                                                                                                                       |
| -------- | ----------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend | Presentation            | Management Console  | Crowsnest Management Console is a light-weight React/SPA (Single Page Application).                                                                                                                                                                                                                |
| Backend  | Model                   | Crowsnest Server    | A RESTful API Server built on Node.JS with Express, MongoDB. This is the Core Crowsnest Server.                                                                                                                                                                                                    |
| Backend  | Processing              | Assessment Engine   | This is the core processing of `Checks` against the `Data` retrieved by the Connector Crows. Checks are logical statements that will evaluate to either `true` or `false`. A set of checks will determine the compliance `pass` or `fail` of a control. And many controls will form an Assessment. |
| Backend  | Extraction              | Connector Crows     | The Connector Crows will `Authenticate` with various Security Tools or Services and then `Extract` data.                                                                                                                                                                                           |

## Data Model

| **Concept**      | **Description**                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Organisation** | Compliance is managed within the scope of an `Organisation`. Each Organisation consists of multiple business units called `Portfolios`, which in turn contain several `Products`. Products are the key units that undergo Compliance `Assessments` against the Organisation’s set of security controls, derived from a selected Cyber Security `Framework`. |
| **Frameworks**   | An Organisation adopts a Cyber Security Framework such as NIST, CIS, or ISO 27001. These frameworks define high-level security controls, which must be translated into actionable, low-level technical implementations called `Checks`. These translate what we must do, to how we do it.                                                                   |
| **Assessments**  | Compliance Assessments evaluate whether the Organisation (macro-level) or individual Products (micro-level) meet the required security controls. These assessments are driven by data gathered from various sources such as security tools, infrastructure, platforms, and services, enabling a systematic and reliable approach to verification.           |
| **Data Sources** | Crowsnest integrates with multiple data sources to aggregate the evidence needed to evaluate each Check. Product-level assessments roll up to form Portfolio-level compliance, which in turn rolls up to the overall Organisation compliance posture.                                                                                                       |

## Technical Descriptions

| Element    | Description                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | A Cyber Security Frameworks comprises of high-level interpretable security controls and best practices. Crowsnest **translates** these high-level security controls into low-level actionable and implementable `Checks`                                                                                                     |
| Connectors | Crowsnest uses Data Crows to connect to Security Tools, Systems and Services to retrieve compliance data.                                                                                                                                                                                                                    |
| Assessment | A compliance assessment is the processing of the `Checks` against the retrieved data to determine a compliance position of `pass` or 'fail`. A Framework contains a number of Domains, Domains contain a number of Controls, and controls are evaluated by 1 or more checks. All checks must pass for the control to be met. |

                    |

#### Important Note

> In the data extraction there must be a common unique reference/key to reconcile data to workloads (aka Products). We call this field `UniqueRefID`.

## Getting Started

Get started by **creating a new Organisation**.

Or **try Crowsnest immediately** with **[trycrowsnest.io](https://getcrow.io)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
