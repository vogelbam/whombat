import Alert from "@/components/Alert";
import Button from "@/components/Button";
import {
  CloseIcon,
  DeleteIcon,
  DownloadIcon,
  WarningIcon,
} from "@/components/icons";
import Link from "@/components/Link";
import useAnnotationProject from "@/hooks/api/useAnnotationProject";

import type { AnnotationProject } from "@/types";

function DeleteProject({ onDelete }: { onDelete?: () => void }) {
  return (
    <Alert
      title={
        <>
          <WarningIcon className="inline-block mr-2 w-8 h-8 text-red-500" />
          Are you sure you want to delete this project?
        </>
      }
      button={
        <>
          <DeleteIcon className="inline-block mr-2 w-5 h-5" />
          Delete Project
        </>
      }
      mode="text"
      variant="danger"
    >
      {({ close }) => {
        return (
          <>
            <div className="flex flex-col gap-2">
              <p>
                This action cannot be undone. All annotations and recordings
                associated with this project will be deleted.
              </p>
              <p>Do you want to proceed?</p>
            </div>
            <div className="flex flex-row gap-2 justify-end mt-4">
              <Button mode="outline" variant="primary" onClick={close}>
                <CloseIcon className="inline-block mr-2 w-5 h-5" />
                Cancel
              </Button>
              <Button mode="text" variant="danger" onClick={onDelete}>
                <DeleteIcon className="inline-block mr-2 w-5 h-5" />
                Delete
              </Button>
            </div>
          </>
        );
      }}
    </Alert>
  );
}

export default function ProjectActions({
  annotationProject,
  onDelete,
}: {
  annotationProject: AnnotationProject;
  onDelete?: () => void;
}) {
  const { delete: deleteProject, download } = useAnnotationProject({
    uuid: annotationProject.uuid,
    annotationProject,
    onDelete,
  });

  return (
    <div className="flex flex-row gap-2 justify-center">
      <Link
        mode="text"
        variant="primary"
        href={download}
        target="_blank"
        download
      >
        <DownloadIcon className="inline-block mr-2 w-5 h-5" /> Download
      </Link>
      <DeleteProject
        // @ts-ignore
        onDelete={deleteProject.mutate}
      />
    </div>
  );
}
