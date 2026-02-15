using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TriviaGenerator
{
    /// <summary>
    /// Query options for the Trivia Generator API
    /// </summary>
    public class TriviaGeneratorQueryOptions
    {
        /// <summary>
        /// The category of the trivia question
        /// </summary>
        [JsonProperty("category")]
        public string Category { get; set; }
    }
}
