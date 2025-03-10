import type { ModuleCode } from "./filterCources"

export type StorageKind = "sync" | "local"

export type StorageSync = Readonly<{
  "features-assignments-coloring": boolean
  "features-autosave-reports": boolean
  "features-deadline-highlighting": boolean
  "features-remove-confirmation": boolean
  "features-filter-courses": boolean
  featuresAssignmentsColoring?: boolean
  featuresDeadlineHighlighting?: boolean
  featuresAutoSaveReports?: boolean
  featuresRemoveConfirmation?: boolean
  featuresFilterCourses?: boolean
  featuresDragAndDrop: boolean
  featuresDisableForceFileSaving?: boolean
  filterConfigForModule?: ModuleCode
}>

export type StorageLocal = Readonly<{
  reportText?: {
    [reportId: string]: {
      modified: number
      text: string
    }
  }
}>
