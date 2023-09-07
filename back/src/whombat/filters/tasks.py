"""Filters for Tasks."""
from sqlalchemy import Select, select

from whombat import models
from whombat.filters import base

__all__ = [
    "ProjectFilter",
    "DatasetFilter",
    "TaskFilter",
]


class ProjectFilter(base.Filter):
    """Filter for tasks by project."""

    eq: int | None = None

    def filter(self, query: Select) -> Select:
        """Filter the query."""
        if self.eq is not None:
            query = query.where(models.Task.project_id == self.eq)

        return query


class DatasetFilter(base.Filter):
    """Filter for tasks by dataset."""

    eq: int | None = None

    def filter(self, query: Select) -> Select:
        """Filter the query."""
        if not self.eq:
            return query

        subquery = (
            select(models.Clip.id)
            .join(
                models.Recording,
                models.Recording.id == models.Clip.recording_id,
            )
            .join(
                models.DatasetRecording,
                models.DatasetRecording.recording_id == models.Recording.id,
            )
            .where(models.DatasetRecording.dataset_id == self.eq)
        )

        return query.where(models.Task.clip_id.in_(subquery))


TaskFilter = base.combine(
    project=ProjectFilter,
    dataset=DatasetFilter,
)