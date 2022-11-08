import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";


const specificationRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationsUseCase(specificationRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export {createSpecificationController}
