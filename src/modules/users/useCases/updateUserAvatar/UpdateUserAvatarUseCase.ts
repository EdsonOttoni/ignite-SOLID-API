import { UserRepository } from '../../repositories/implementations/UserRepository'
import { deleteFile } from '../../../../utils/file'

interface IRequest {
  user_id: string
  avatar_file: string
}

class UpdateUserAvatarUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.userRepository.findById(user_id)

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }

    user.avatar = avatar_file

    await this.userRepository.create(user)
  }
}

export { UpdateUserAvatarUseCase }
