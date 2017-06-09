# Contributing to Deployd

We'd love to have your contribution to deployd. There are several ways to contribute:

 * Build an external module for deployd
 * Open bugs and feature requests for deployd core itself
 * Submit Pull Requests to deployd core
 * Help users on the [chat](https://gitter.im/deployd/deployd)

## Questions or Issues?

* [chat on Gitter](https://gitter.im/deployd/deployd): Best chance to find someone to help you
* [Discussion on Google groups](https://groups.google.com/forum/?fromgroups#!forum/deployd-users)
* [Q&A on stackoverflow](http://stackoverflow.com/questions/tagged/deployd)
* [Submit a bug on github](https://github.com/deployd/deployd/issues/new): only report if it's a bug from deployd Code.

### External Deployd Modules

The goal of the deployd core is to be as lightweight
as possible, with simple APIs to build different
types of extensions.
In order to make deployd extensions discoverable in
[npm](http://npmjs.org), we recommend the
following naming conventions:

 * `dpd-module-xxx`, where `xxx` is the specific function
    of this module. "Module" is the generic term for
    anything that extends the functionality of deployd core.
 * `dpd-resource-email`, where `email` is a unique
    resource name.
    In deployd, resources are any kind of data or
    functionality that is intended to be made available
    to client applications.
 * `dpd-store-mongodb`, (Core API Pending) where
    `mongodb` is a particular type of data store with
    which to build deployd apps.
 * `dpd-deploy-computeengine`, (Core API Pending)
    where `computeengine` is a deployment target
    for this deployd app

The deployd documentation and dashboard will
likely implement features for discovering modules,
which will rely heavily on these established
naming conventions.

### Bugs

Helping to identify and report bugs is one
of the most helpful things folks can do to
contribute to deployd.

See [Submitting Issues](#submitting-issues) below
for instructions on filing helpful bug reports.

### Feature Requests

Submitting feature requests is a helpful
way to let the core team and the rest of
the deployd community know how others are
using deployd, and how to make it better.

Feature requests should be submitted as
issues or Pull Requests to the
[Github repository](https://github.com/deployd/deployd).

## Submission Guidelines

### Submitting Issues

To help keep the issue count as low as it can be,
it's important to first review closed issues and forum
postings to make sure the issue is unreported and
valid.

The best place to report bugs or issues with deployd
is on the [Github repository](https://github.com/deployd/deployd).

When reporting a bug, it's important to include as
simple of an example as possible to help reproduce
the bug. Here are some helpful characteristics of a
bug report:

 * A simple description of the expected behavior
    and actual behavior
 * A failing unit test demonstrating the behavior
 * A small code example (such as a resource
    configuration file) to show the failure
 * Which version of deployd-core, and versions of
    third-party modules being used.

### Submitting Pull Requests

These are the guidelines for submitting
pull requests for new features or bugs:

 * Verify that the PR is not a duplicate
    to another PR
 * Make all changes in a new git branch
 * Follow the established
    [Code Submission Standards](#code-submission-standards)
 * Follow the established
    [Git Commit Guidelines](#git-commit-guidelines)
 * See [Submitting Your Changes](#submitting-your-changes)
    for details on finally submitting a PR

## Code Submission Standards

To ensure consistency in code style, keep these standards
in mind as you work on code to submit to deployd:

 * All features or bug fixes must be tested by
    one or more specs in the `test` directory
 * All public APIs must be documented in our
    [docs](https://github.com/deployd/docs)
 * JSHint should be run against all changes
    without warnings

## Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.
This leads to more readable messages that are easy to follow when looking through the project history.
But also, we use the git commit messages to generate the AngularJS change log.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope

The scope could be anything specifying place of the commit change. For example
`server`, `router`, `user`, `collection`, `store`, etc...

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

###Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.

###Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

## Submitting Your Changes

1. Create and checkout a new branch off the master branch for your changes:

   ```shell
   git checkout -b my-fix-branch master
   ```

2. Create your patch, including appropriate test cases.

3. Commit your changes in logical commits and create a descriptive commit message (the commit message is used to
   generate release notes, please check out our [commit message conventions](#commit-message-format)):

   ```shell
   git commit -a
   ```

4. Push your branch to Github:

   ```shell
   git push origin my-fix-branch
   ```

5. In Github, send a pull request to `deployd:master`.

That's it! Thank you for your contribution!

When the patch is reviewed and merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

```shell
# Delete the remote branch on Github:
git push origin :my-fix-branch

# Check out the master branch:
git checkout master

# Delete the local branch:
git branch -D my-fix-branch

# Update your master with the latest upstream version:
git pull --ff upstream master
```

## Maintainers Rebase Guide

To keep a flat and readable code history and revert easier, we rebase pull requests instead of merging them. Please use the github button "Squash and merge".
![http://i.stack.imgur.com/cyHZY.png](http://i.stack.imgur.com/cyHZY.png)