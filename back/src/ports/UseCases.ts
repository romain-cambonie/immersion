export type UseCasesType =
  | "testUseCase"
  | "sendEmailsWithAssessmentCreationLink";

export type UseCase<T = void> = {
  execute: () => Promise<T>;
};

export type UseCases = Record<UseCasesType, UseCase>;
