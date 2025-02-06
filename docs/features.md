---
sidebar_position: 2
---
# Features

HySDS (Hybrid-Cloud Science Data Processing System) is an open source science data processing system used across multiple large-scale Earth Science missions, data production, and analysis systems.

## Key Capabilities

### Scalability and Performance
- Demonstrated data processing scalability to over 8,000 parallel compute nodes
- Supports processing rates of over 3-million jobs per day
- Successfully processes >300TB/day for NISAR mission
- Processed 2PB in first year for SWOT mission
- Supports both forward processing and bulk reprocessing campaigns

### Deployment Flexibility
- Hybrid cloud deployment across:
  - AWS cloud infrastructure
  - On-premise systems
  - NASA High-End Computing Capability (HECC)
- Multi-cloud support spanning:
  - Amazon Web Services (AWS)
  - Google Cloud Platform (GCP)
  - Microsoft Azure
  - NASA HECC

### Cost Optimization
- Fault tolerant operation in AWS spot market for cost savings
- Cost-production modeling capabilities for:
  - Cost estimation
  - Resource sizing
  - Processing rates
  - Data volume projections
- Real-time cost analysis and optimization during operations

### Core Components
- GRQ (Geo Region Query):
  - Geospatial data catalog and management
  - Faceted search capabilities
  - Production rules evaluation and triggering
- Mozart:
  - Job management and scheduling
  - Queue management
  - Auto-scaling control
- Metrics:
  - Real-time job metrics
  - Worker metrics and analytics
- Factotum:
  - "Hot" helper workers for low-latency processes
- Verdi Workers:
  - Distributed compute nodes
  - Scales processing based on workload

### Data Management
- Supports rolling storage of data products
- Integrated with external data sources
- Publish/subscribe capabilities
- Data staging and caching mechanisms
- Support for cloud-optimized data formats
- Integration with DAACs and archives

### Automation & Orchestration
- Automated trigger rules based on:
  - Data ingestion
  - Job state changes
  - Time-based scheduling
- Workflow orchestration
- Production rule evaluation and actions
- Auto-scaling based on queue backlogs

### Development & Integration
- Open source community approach
- Support for multiple programming languages
- Container-based deployment (Docker/Podman)
- CI/CD integration capabilities
- API-driven architecture

### Monitoring & Operations
- Real-time faceted analytics
- Operational dashboards
- Job status monitoring
- Resource utilization tracking
- Cost tracking and analysis
- Performance metrics

### Security Features
- Support for multiple authentication methods
- Integration with NASA authentication systems
- VPC and firewall management
- Secure data access controls

## Mission Support
Currently used by major NASA Earth Science missions including:
- NISAR
- SWOT
- SMAP
- SNWG OPERA
- OCO-2/3 reprocessing

## Project Integration
Successfully integrated into:
- 13 active projects as of 2024
- 33 total NASA-funded projects to date
- Multiple research and analysis projects
- Data production systems
- Analysis platforms

## Standards & Interoperability
- OGC Application Package support
- WPS-T interface capabilities
- STAC catalog integration
- Support for standard data formats
- Integration with common Earth science tools and services

## Community & Support
- Active open source community
- 50+ developers/integrators
- 30+ contributors
- 78 GitHub repositories
- Regular community coordination meetings
- Public documentation and support resources
