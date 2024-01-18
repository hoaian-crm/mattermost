import { Injectable } from "@nestjs/common";
import { Mattermost } from "../core";
import { RegistryPackageMessage, WorkflowRunMessage } from "./type";

@Injectable()
export class GithubBotService {

  mattermost: Mattermost;

  constructor() {
    this.mattermost = new Mattermost({
      accessToken: process.env.GITHUB_BOT_ACCESSTOKEN,
      mattermostServer: process.env.MATTERMOST_SERVER
    })
  }

  async workflowRun(data: WorkflowRunMessage) {
    if (data.action === 'in_progress') {
      return this.mattermost.send({
        message: `##### New workflow in progress: ${data.workflow_run.html_url}`,
        channel_id: '6xm1eehoxpf3pgihdruoigq3po'
      })
    }
    if (data.action === 'completed') {
      if (data.workflow_run.conclusion === 'success') {
        return this.mattermost.send({
          message: `##### Workflow run done @all: ${data.workflow_run.html_url}`,
          channel_id: '6xm1eehoxpf3pgihdruoigq3po',
        })
      }
      if (data.workflow_run.conclusion === 'failure') {
        return this.mattermost.send({
          message: `##### Workflow run failed @all: ${data.workflow_run.html_url}`,
          channel_id: '6xm1eehoxpf3pgihdruoigq3po',
          metadata: {
            priority: {
              priority: 'urgent'
            }
          }
        })
      }
    }
  }

  async registryPackage(data: RegistryPackageMessage) {
    return this.mattermost.send({
      message: `##### Docker page ${data.action} @all: ${data.repository.html_url}`,
      channel_id: 'iignkzboeigsud5sxa4ffwrbjy',
      props: {
        attachments: [{
          actions: [
            {
              id: 'restart', name: `Rollout restart ${data.registry_package.name}`,
              integration: {
                url: process.env.Bot + "/devops/deployment/restart"
              }
            }
          ]
        }]
      }
    })
  }
}
