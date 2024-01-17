export type WorkflowRunMessage = {
  action: 'completed' | 'in_progress' | 'requested',
  repository: any;
  sender: any;
  workflow_run: {
    html_url: string;
    conclusion: string;
  }
}

export type RegistryPackageMessage = {
  action: 'published | updated',
  registry_package: {
    id: string;
    name: string;
    html_url: string;
  },
  repository: {
    html_url: string;
  }
}
