# Threading Histories Dataset - Data Dictionary & Metadata

## Dataset Information

**Title:** Threading Histories: Nigerian Women's Textile Traditions Dataset  
**Version:** 1.0.0  
**Last Updated:** December 15, 2024  
**Creator:** Bryttany Grimes  
**Affiliation:** CHI Fellowship, Michigan State University  
**License:** Creative Commons Attribution 4.0 International (CC BY 4.0)  
**DOI:** [To be assigned]  
**Project URL:** https://threadinghistories.org  

## Dataset Description

This dataset documents the spatial, temporal, and cultural dimensions of Nigerian women's textile handicraft traditions from 1850-1960. It maps ethnolinguistic groups' distinctive textile practices and examines how British colonialism and foreign imports transformed traditional knowledge systems.

**Geographic Coverage:** Nigeria (modern boundaries)  
**Temporal Coverage:** 1850-1960  
**Total Records:** 12 locations (sample dataset)  
**Data Collection Period:** November-December 2024  
**Primary Language:** English  

## Purpose and Use

This dataset is designed for:
- Academic research in African history, textile studies, gender studies, and postcolonial studies
- Digital humanities spatial analysis projects
- Educational resources for teaching African material culture
- Public engagement with Nigerian cultural heritage
- Community members connecting with ancestral textile traditions

## Data Collection Methodology

### Primary Sources
- British Colonial Archives (National Archives UK, Colonial Office records)
- Museum collections (British Museum, Smithsonian, Field Museum, Birmingham Museum)
- Missionary records and photographs (Rhodes House Library)
- Trade reports and economic surveys
- Ethnographic documentation and anthropological surveys

### Secondary Sources
- Academic publications on Nigerian textile history
- Oral histories collected by Nigerian scholars and institutions
- Contemporary scholarly research

### Data Processing
1. Archival materials reviewed and documented
2. Geographic locations identified and verified
3. Historical place names cross-referenced with modern coordinates
4. Multiple sources triangulated for accuracy
5. Colonial bias in sources analyzed and noted
6. Data structured in standardized format

### Georeferencing Methodology
- Historical maps consulted from David Rumsey Map Collection and Library of Congress
- Colonial-era place names cross-referenced with modern geographic databases
- Coordinates verified using multiple historical and contemporary sources
- Uncertainty noted where exact locations could not be determined

## File Formats

This dataset is available in three formats:

### 1. GeoJSON (threading_histories_dataset.geojson)
- **Use for:** GIS applications, web mapping, spatial analysis
- **File size:** ~28 KB
- **Applications:** QGIS, ArcGIS, Leaflet.js, Mapbox
- **Structure:** GeoJSON FeatureCollection with Point geometries
- **Coordinate System:** WGS84 (EPSG:4326)

### 2. CSV (threading_histories_dataset.csv)
- **Use for:** Spreadsheet analysis, statistical software, database import
- **File size:** ~5 KB
- **Applications:** Microsoft Excel, Google Sheets, R, Python, SPSS
- **Encoding:** UTF-8
- **Delimiter:** Comma
- **Text Qualifier:** Double quotes

### 3. JSON (threading_histories_dataset.json)
- **Use for:** Web applications, programming, data processing
- **File size:** ~28 KB
- **Applications:** JavaScript, Python, any programming language
- **Structure:** Array of objects with consistent schema

## Data Structure

### Field Definitions

| Field Name | Data Type | Required | Description | Example |
|------------|-----------|----------|-------------|---------|
| id | String | Yes | Unique identifier for each record | TH001 |
| location_name | String | Yes | Name of location/settlement | Lagos |
| latitude | Float | Yes | Decimal degrees, WGS84 | 6.5244 |
| longitude | Float | Yes | Decimal degrees, WGS84 | 3.3792 |
| region | String | Yes | Geographic region within Nigeria | Southwest Nigeria |
| ethnolinguistic_group | String | Yes | Primary ethnic/linguistic group | Yoruba |
| craft_type | String | Yes | Category of textile craft | Dyeing |
| specific_technique | String | Yes | Specific technique or style | Indigo dyeing (Adire) |
| time_period | String | Yes | Time range of documented practice | 1850-1900 |
| status | String | Yes | Status of tradition during period | Thriving |
| description | Text | Yes | Historical and cultural context | [See detailed description] |
| colonial_impact | Text | Yes | How colonialism affected this tradition | [See impact notes] |
| sources | Text | Yes | Primary and secondary sources cited | [See citation] |
| images | String | No | Associated image filenames | lagos_adire_1890.jpg |
| contributor | String | Yes | Who contributed/verified this data | Archival Research |
| date_added | Date | Yes | Date record was added (YYYY-MM-DD) | 2024-11-15 |

### Controlled Vocabularies

#### craft_type
- Dyeing
- Weaving
- Embroidery
- Basketry
- Beadwork
- Pottery and textile integration

#### status
- **Thriving:** Practice was flourishing with strong economic and cultural support
- **Stable:** Practice continued with consistent participation and demand
- **Declining:** Practice was decreasing due to economic, social, or political factors
- **Disappeared:** Practice ceased during this time period

#### region
- Southwest Nigeria
- Southeast Nigeria
- South-South Nigeria
- North Central Nigeria
- Northwest Nigeria
- Northeast Nigeria

#### time_period
Periods are defined based on significant historical events and colonial administration changes:
- 1850-1900: Early colonial contact and trade expansion
- 1900-1920: Establishment of formal colonial administration
- 1920-1950: Peak colonial period
- 1950-1960: Late colonial period and approach to independence

### ethnolinguistic_group
Major groups included (non-exhaustive):
- Yoruba
- Igbo
- Hausa
- Fulani
- Edo
- Efik
- Gbagyi
- Alago
- Multiple groups (for mixed or transitional areas)

## Data Quality and Limitations

### Known Limitations
1. **Archival Bias:** Sources predominantly reflect colonial European perspectives
2. **Geographic Gaps:** Some regions better documented than others due to archival availability
3. **Temporal Unevenness:** Information density varies across time periods
4. **Women's Voices:** Direct accounts from women practitioners are limited
5. **Sample Size:** This is a preliminary dataset; comprehensive coverage requires additional research
6. **Urban Bias:** Better documentation exists for urban centers than rural areas

### Data Quality Measures
- All records include source citations for verification
- Multiple sources consulted where available
- Colonial bias explicitly noted in colonial_impact field
- Gaps in knowledge documented rather than filled with speculation
- Uncertain information flagged in description field

### Missing Data
- Some image files referenced may not yet be digitized
- Not all locations have complete information across all time periods
- Exact coordinates sometimes approximated to town/region level

## Citation Guidelines

### To cite the dataset:
```
Grimes, Bryttany. (2024). Threading Histories: Nigerian Women's Textile 
Traditions Dataset (Version 1.0.0) [Data set]. CHI Fellowship, Michigan 
State University. https://threadinghistories.org
```

### To cite a specific record:
```
Grimes, Bryttany. (2024). Lagos - Indigo Dyeing (Adire) [Record ID: TH001]. 
In Threading Histories: Nigerian Women's Textile Traditions Dataset. 
CHI Fellowship, Michigan State University. https://threadinghistories.org
```

### BibTeX:
```bibtex
@dataset{grimes_threading_2024,
  author = {Grimes, Bryttany},
  title = {Threading Histories: Nigerian Women's Textile Traditions Dataset},
  year = {2024},
  version = {1.0.0},
  publisher = {CHI Fellowship, Michigan State University},
  url = {https://threadinghistories.org}
}
```

## License and Usage Terms

### Creative Commons Attribution 4.0 International (CC BY 4.0)

You are free to:
- **Share:** Copy and redistribute the material in any medium or format
- **Adapt:** Remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made

Full license text: https://creativecommons.org/licenses/by/4.0/

### Attribution Requirements
When using this dataset, please:
1. Cite the dataset using the citation format above
2. Link back to threadinghistories.org
3. Indicate if you modified the data
4. Do not suggest the licensor endorses you or your use

### Suggested Attribution Statement
"This [work/analysis/visualization] uses data from Threading Histories: Nigerian Women's Textile Traditions Dataset by Bryttany Grimes (2024), licensed under CC BY 4.0."

## Ethical Considerations

### Colonial Archives
This dataset is built primarily from colonial archives, which:
- Reflect European perspectives and biases
- Often minimize or ignore African agency and expertise
- Systematically undervalue women's labor and knowledge
- Were created in contexts of violence and exploitation

Users are encouraged to:
- Read critically and recognize these limitations
- Seek out oral histories and community knowledge
- Consider multiple interpretations of the data
- Support efforts to decolonize archives

### Community Engagement
This project welcomes:
- Corrections from community members with relevant knowledge
- Additional information from descendant communities
- Oral histories and family traditions
- Collaborative scholarship

Contact: [Your email]

## Data Updates and Versions

### Version History

**Version 1.0.0 (December 15, 2024)**
- Initial release
- 12 sample locations
- Three file formats (GeoJSON, CSV, JSON)
- Complete data dictionary

### Future Updates
Planned additions include:
- Expansion to 50+ locations
- Additional time periods (pre-1850, post-1960)
- Integration of oral histories
- Enhanced metadata for images
- Links to digitized archival sources

### Accessing Updates
- Latest version always available at: https://threadinghistories.org/data
- Version history maintained in GitHub repository
- Users can subscribe to update notifications

## Technical Specifications

### GeoJSON Specifications
- **Standard:** RFC 7946
- **Geometry Type:** Point
- **Coordinate Reference System:** WGS84 (EPSG:4326)
- **Coordinate Order:** [longitude, latitude]
- **Properties:** All fields defined above
- **Metadata:** Included in top-level metadata object

### CSV Specifications
- **Encoding:** UTF-8
- **Line Endings:** LF (Unix-style)
- **Delimiter:** Comma (,)
- **Text Qualifier:** Double quotes (")
- **Header Row:** Yes (field names)
- **Date Format:** YYYY-MM-DD (ISO 8601)

### JSON Specifications
- **Encoding:** UTF-8
- **Format:** Pretty-printed (indented)
- **Structure:** Array of objects
- **Date Format:** YYYY-MM-DD (ISO 8601)

## Contact and Support

### Project Contact
**Bryttany Grimes**  
CHI Fellow, Michigan State University  
Email: [Your email]  
Project Website: https://threadinghistories.org  

### Reporting Issues
To report errors, suggest corrections, or contribute information:
- Use the contact form at https://threadinghistories.org/community
- Email directly with "Dataset Issue" in subject line
- All corrections will be verified and acknowledged

### Acknowledgments
This dataset was created with support from:
- Cultural Heritage Informatics (CHI) Initiative, Michigan State University
- [Other funding sources if applicable]

Special thanks to:
- CHI Fellowship cohort for feedback and support
- Faculty advisors for methodological guidance
- Archival institutions for access to materials
- Community contributors for shared knowledge

## Related Resources

### Project Components
- Interactive Map: https://threadinghistories.org/map
- Textile Archive: https://threadinghistories.org/archive
- Methodology: https://threadinghistories.org/methodology
- Bibliography: https://threadinghistories.org/bibliography

### Recommended Tools for Data Use

**GIS Software:**
- QGIS (free, open-source): https://qgis.org
- ArcGIS Online
- Google Earth

**Mapping Libraries:**
- Leaflet.js: https://leafletjs.com
- Mapbox GL: https://www.mapbox.com
- D3.js: https://d3js.org

**Data Analysis:**
- R (tidyverse, sf packages)
- Python (pandas, geopandas)
- Excel/Google Sheets

## Document Information

**Document Version:** 1.0  
**Last Updated:** December 15, 2024  
**Author:** Bryttany Grimes  
**Format:** Markdown  

---

For questions about this data dictionary, please contact the project team at https://threadinghistories.org/community
