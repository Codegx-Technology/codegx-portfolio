#!/usr/bin/env python3
"""
CodeCrusher - A CLI tool for code generation and transformation.
"""

import argparse
import logging
import os
import sys
import json
from typing import Dict, Any, Optional, List

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger("codecrusher")

def load_config(config_path: str) -> Dict[str, Any]:
    """
    Load configuration from a JSON file.
    
    Args:
        config_path: Path to the configuration file
        
    Returns:
        Dictionary containing configuration values
        
    Raises:
        FileNotFoundError: If the config file doesn't exist
        json.JSONDecodeError: If the config file is not valid JSON
    """
    try:
        if not os.path.exists(config_path):
            logger.warning(f"Config file not found: {config_path}")
            return {}
            
        with open(config_path, 'r') as f:
            config = json.load(f)
            
        # Validate config values
        valid_providers = ["mistral", "openai"]
        if "provider" in config and config["provider"] not in valid_providers:
            logger.warning(f"Invalid provider in config: {config['provider']}. Must be one of {valid_providers}")
            config.pop("provider")
            
        if "max_retries" in config and not isinstance(config["max_retries"], int):
            logger.warning(f"Invalid max_retries in config: {config['max_retries']}. Must be an integer")
            config.pop("max_retries")
            
        if "timeout" in config and not isinstance(config["timeout"], int):
            logger.warning(f"Invalid timeout in config: {config['timeout']}. Must be an integer")
            config.pop("timeout")
            
        if "use_cache" in config and not isinstance(config["use_cache"], bool):
            logger.warning(f"Invalid use_cache in config: {config['use_cache']}. Must be a boolean")
            config.pop("use_cache")
            
        if "default_tags" in config and not isinstance(config["default_tags"], list):
            logger.warning(f"Invalid default_tags in config: {config['default_tags']}. Must be a list")
            config.pop("default_tags")
            
        logger.info(f"Loaded configuration from {config_path}")
        return config
        
    except json.JSONDecodeError as e:
        logger.error(f"Error parsing config file {config_path}: {e}")
        logger.error("Config file must be valid JSON")
        return {}
    except Exception as e:
        logger.error(f"Error loading config file {config_path}: {e}")
        return {}

def parse_args() -> argparse.Namespace:
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="CodeCrusher - A CLI tool for code generation and transformation"
    )
    
    # Add config file argument
    parser.add_argument(
        "--config",
        type=str,
        help="Path to configuration file (default: codecrusher.config.json)",
    )
    
    # Add other arguments
    parser.add_argument(
        "--provider",
        type=str,
        choices=["mistral", "openai"],
        help="AI provider to use (mistral or openai)",
    )
    
    parser.add_argument(
        "--model",
        type=str,
        help="Model to use (e.g., mistral-7b, gpt-4-turbo)",
    )
    
    parser.add_argument(
        "--max-retries",
        type=int,
        help="Maximum number of retries for API calls",
    )
    
    parser.add_argument(
        "--timeout",
        type=int,
        help="Timeout in seconds for API calls",
    )
    
    parser.add_argument(
        "--use-cache",
        action="store_true",
        help="Use cache for API calls",
    )
    
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Disable cache for API calls",
    )
    
    parser.add_argument(
        "--prompt",
        type=str,
        help="Prompt text for code generation",
    )
    
    parser.add_argument(
        "--tags",
        type=str,
        nargs="+",
        help="Tags for the generated code",
    )
    
    return parser.parse_args()

def merge_config_with_args(args: argparse.Namespace, config: Dict[str, Any]) -> Dict[str, Any]:
    """
    Merge configuration from file with command line arguments.
    Command line arguments take precedence over config file values.
    
    Args:
        args: Command line arguments
        config: Configuration from file
        
    Returns:
        Dictionary with merged configuration
    """
    merged = {}
    
    # Start with config file values
    if "provider" in config:
        merged["provider"] = config["provider"]
    if "model" in config:
        merged["model"] = config["model"]
    if "max_retries" in config:
        merged["max_retries"] = config["max_retries"]
    if "timeout" in config:
        merged["timeout"] = config["timeout"]
    if "use_cache" in config:
        merged["use_cache"] = config["use_cache"]
    if "default_prompt_text" in config:
        merged["prompt"] = config["default_prompt_text"]
    if "default_tags" in config:
        merged["tags"] = config["default_tags"]
    
    # Override with command line arguments if provided
    if args.provider:
        merged["provider"] = args.provider
    if args.model:
        merged["model"] = args.model
    if args.max_retries is not None:
        merged["max_retries"] = args.max_retries
    if args.timeout is not None:
        merged["timeout"] = args.timeout
    if args.use_cache:
        merged["use_cache"] = True
    if args.no_cache:
        merged["use_cache"] = False
    if args.prompt:
        merged["prompt"] = args.prompt
    if args.tags:
        merged["tags"] = args.tags
    
    return merged

def main():
    """Main entry point for the application."""
    args = parse_args()
    
    # Determine config file path
    config_path = args.config if args.config else "codecrusher.config.json"
    
    # Load config file if it exists
    config = load_config(config_path)
    
    # Merge config with command line arguments
    merged_config = merge_config_with_args(args, config)
    
    # Log the final configuration
    logger.info("Final configuration:")
    for key, value in merged_config.items():
        logger.info(f"  {key}: {value}")
    
    # TODO: Implement the actual functionality using the merged configuration
    print("CodeCrusher is ready to run with the following configuration:")
    for key, value in merged_config.items():
        print(f"  {key}: {value}")

if __name__ == "__main__":
    main()
