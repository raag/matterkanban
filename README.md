# MatterKanban

This is a project to allow you to create tasks in kanboard from mattermost.

## Previous configuration.
Copy the file `config/config.example.json` to `config/config.json`

## Installation.

1. Clone this project.
2. Execute `yarn install`
3. Execute `yarn buil`

## Running

Execute `yarn start`

The applicacion will run on http://YOUR_HOST:3000

## Configure mattermost.

1. Go to integration.
2. Open slash commands
3. Create a new slash command:
  - In url put `http://YOUR_HOST:3000/api/task/create`
  - choose a slash command, for example: `/kanban`

 
