# MatterKanban

This is a project to allow you to create tasks in kanboard from mattermost.

## Previous configuration.
Copy the file `config/config.example.json` to `config/config.json` and edit:

- **api_key:** The API KEY from your kanboard setting->Integration page.
- **kanban_url:** The API ENDPOINT from your kanboard setting->Integration page.
- **user_id:** The id of the user who will create the new tasks.
- **projects:** The relation of channels and projects with the form `channel_name:project_id`, for example: `my_channel:1`


## Manual installation.

1. Clone this project.
2. Execute `yarn install`
3. Execute `yarn build`
4. Execute `yarn start`


## Docker docker-compose installation.

1. Execute `docker build -t matterkanban .`
2. Run  `docker-compose -f docker-compose.yaml up -d` 


The applicacion will run on `http://YOUR_HOST:3000`

## Configure mattermost.

1. Go to integration.
2. Open slash commands
3. Create a new slash command with next:
  - **Title:** `kanbanTask`
  - **Description:** `Create a task in kanban`
  - **Command Trigger Word:** `/kanbantask`
  - **Request URL:** `http://YOUR_HOST:3000/api/task/create`
  - **Request Method:** `POST`

## Test

Go to any configured channel in mattermost and type `/kanbantask This is an example task`

 
