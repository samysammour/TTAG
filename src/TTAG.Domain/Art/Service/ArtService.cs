namespace TTAG.Domain.Service
{
    using Model;
    using System.Threading.Tasks;
    using TTAG.Domain.Repository;

    public class ArtService : IArtService
    {
        private readonly IArtRepository artRepository;

        public ArtService(IArtRepository artRepository)
        {
            this.artRepository = artRepository;
        }

        public async Task<Art> AddOrUpdate(Art art)
        {

            art = await this.artRepository.AddOrUpdateAsync(art).ConfigureAwait(false);
            return art;
        }
    }
}
